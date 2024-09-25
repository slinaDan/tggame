<template>
	<div class="page">
		<Suspense>
			<NavbarVue></NavbarVue>
		</Suspense>
		<Suspense>
			<MyTabbarVue :active="active"></MyTabbarVue>
		</Suspense>
		<div class="iconWrap">
			<div class="flex-bw ">
				<div class="flex1 ">
					<img class="icons" @click="jumpto('/synthesis')" v-if="locale=='en'" src="/public/imgs/icon11.png"
						alt="">
					<img class="icons" @click="jumpto('/synthesis')" v-else src="/public/imgs/icon1.png" alt="">
					<img class="icons" @click="jumpto('/myPet')" v-if="locale=='en'" src="/public/imgs/icon33.png"
						alt="">
					<img class="icons" @click="jumpto('/myPet')" v-else src="/public/imgs/icon3.png" alt="">
					<img class="icons" @click="jumpto('/kong')" src="/public/imgs/icon5.png" alt="">
					<img class="icons" @click="jumpto('/ranking')" src="/public/imgs/icon7.png" alt="">
				</div>
				<div class="flex1 ">
					<img class="icons" @click="jumpto('/getHelp')" v-if="locale=='en'" src="/public/imgs/icon22.png"
						alt="">
					<img class="icons" @click="jumpto('/getHelp')" v-else src="/public/imgs/icon2.png" alt="">
					<img class="icons" @click="jumpto('/invite')" v-if="locale=='en'" src="/public/imgs/icon44.png"
						alt="">
					<img class="icons" @click="jumpto('/invite')" v-else src="/public/imgs/icon4.png" alt="">
					<img class="icons" @click="jumpto('/airdrop')" v-if="locale=='en'" src="/public/imgs/icon66.png"
						alt="">
					<img class="icons" @click="jumpto('/airdrop')" v-else src="/public/imgs/icon6.png" alt="">
				</div>
			</div>
			<div class="flex-bw btns">
				<button class="flex">
					<span>{{$t('今日孵化')}}：</span>
					<span class="fs-16">{{userInfo.hatchTodayNum}}{{$t('次')}}</span>
				</button>
				<button class="flex">
					<span>{{$t('永久孵化')}}：</span>
					<span class="fs-16">{{userInfo.hatchPerpetualNum}}{{$t('次')}}</span>
				</button>
			</div>
			<img @click="showSuper = true" class="super" :src="'/public/imgs/icon'+(locale=='en'?88:8)+'.png'" alt="">
		</div>
		<div class="wrap flex1">
			<img class="egg" src="/public/imgs/egg.png" alt="">
			<div class="income flex">
				<span>{{$t('我的收益')}}：</span>
				<span class="yellow">{{userInfo.earning}}/h</span>
			</div>
			<div class="flex buttons" v-if="!inProgress">
				<button @click="toHatch">{{$t('孵化')}}</button>
				<button @click="showTimes = true">{{$t('暴击孵化次数')}}</button>
			</div>
			<div class="flex progress" v-else>
				<span>{{$t('孵化进度')}}</span>
				<div class="van_progress">
					<van-progress :percentage="(1- remainingSecond / totalSecond) * 100" color="#F5BB30"
						:show-pivot="false" track-color="#413E5A" />
					<div class="countdown flex">
						<van-count-down :time="remainingSecond * 1000" :format="'mm'+ $t('分') +'ss' + $t('秒')" />
					</div>
				</div>

				<img @click="jumpto('/getHelp')" src="/imgs/hand.png" alt="">
			</div>
		</div>
		<!-- 孵化 -->
		<van-popup v-model:show="showCenter" round>
			<div class="modal flex1">
				<div>{{$t('是否确认进行孵化操作')}}？</div>
				<div class="flex">
					<button @click="showCenter = false">{{$t('取消')}}</button>
					<button @click="onConfirm">{{$t('确定')}}</button>
				</div>
			</div>
		</van-popup>
		<!-- 超级孵化器 -->
		<van-popup v-model:show="showSuper" round>
			<div class="modal modal1 flex1">
				<div class="flex1">
					<img src="/public/imgs/super.png" alt="">
					<div>{{$t('您将使用TON购买（超级孵化器），购买后获得永久免除所有宠物蛋孵化时间权益',[config[configKey[0]]])}}</div>
				</div>
				<div class="flex">
					<button @click="showSuper = false">{{$t('取消')}}</button>
					<button @click="toBuy(2)">{{$t('购买')}}</button>
				</div>
			</div>
		</van-popup>
		<!-- 暴击孵化 -->
		<van-popup v-model:show="showTimes" round>
			<div class="modal modal1 flex1">
				<div class="flex1">
					<img src="/public/imgs/times.png" alt="">
					<div>{{$t('您将使用TON购买（暴击孵化），购买后获得永久孵化次数次',[config[configKey[1]],config[configKey[2]]])}}</div>
				</div>
				<div class="flex">
					<button @click="showTimes = false">{{$t('取消')}}</button>
					<button @click="toBuy(1)">{{$t('购买')}}</button>
				</div>
			</div>
		</van-popup>
		<!-- 动效 -->
		<van-popup v-model:show="showGif" round>
			<img v-if="showGif" class="gif" src="/imgs/one.gif" alt="">
		</van-popup>
		<van-popup v-model:show="showPet" round>
			<img class="gif petImg" :class="{petImg1:showScale}" :src="petUrl" alt="">
		</van-popup>
	</div>
</template>

<script>
	import NavbarVue from '@/components/Navbar.vue';
	import MyTabbarVue from '@/components/MyTabbar.vue';
	import {
		ref,
		onMounted
	} from 'vue';
	import {
		useI18n
	} from 'vue-i18n'
	import {
		getUserDetail,
		getConfigKeys,
		getConfigKey,
		hatching,
		hatch,
		pay
	} from '../request/api';
	import {
		Popup,
		Progress,
		CountDown,
		showSuccessToast
	} from 'vant';
	import {
		useRouter
	} from 'vue-router';
	import {
		showFailToast
	} from 'vant';
	import {
		useTonConnectUI,
	} from '@townsquarelabs/ui-vue';

	export default {
		components: {
			NavbarVue,
			MyTabbarVue,
			[Popup.name]: Popup,
			[Progress.name]: Progress,
			[CountDown.name]: CountDown,
		},
		setup() {
			let showCenter = ref(false)
			let showSuper = ref(false)
			let showTimes = ref(false)
			let showGif = ref(false)
			let showPet = ref(false)
			let showScale = ref(false)
			const router = useRouter();
			const inProgress = ref(false);
			const active = ref(0);
			const token = localStorage.token
			let configKey = ['app:superhatch:amount', 'app:hatchnum:amount', 'app:hatchnum:num', 'app:ton:address']
			const userInfo = ref({})
			const config = ref({})
			const remainingSecond = ref(0)
			const totalSecond = ref(0)
			const petUrl = ref('')
			const [tonConnectUI] = useTonConnectUI();
			const {
				locale
			} = useI18n()

			async function fetchUserData() {
				try {
					const res = await getUserDetail();
					const res1 = await hatching(); // 孵化中宠物
					console.log(res);
					if (res.code == 200) {
						userInfo.value = res.data
					}
					if (res1.code == 200) {
						remainingSecond.value = res1.data.hatching ? res1.data.hatching.remainingSecond : 0
						totalSecond.value = res1.data.hatching ? res1.data.hatching.totalSecond : 1
						inProgress.value = res1.data.hatching == null ? false : true
						let showTipList = res1.data.showTipList
						if (showTipList.length && showTipList[0].status == 1 && showTipList[0].showTip == 0) {
							petUrl.value = showTipList[0].pet.image
							emitGif()
						}
					}
				} catch (error) {
					console.error('失败:', error);
				}
			}

			onMounted(() => {
				if (token) {
					fetchUserData()
					getConfig()
				}
				// emitGif()
			})

			function emitGif() {
				// 动效
				showScale.value = false
				showGif.value = true
				setTimeout(() => {
					showGif.value = false
				}, 900)
				setTimeout(() => {
					showPet.value = true
					setTimeout(() => {
						showScale.value = true
						setTimeout(() => {
							showPet.value = false
						}, 700)
					}, 100)
				}, 700)
			}
			async function getConfig() {
				const res = await getConfigKeys(configKey);
				if (res.code == 200) {
					config.value = res.data
				}
			}

			function toHatch() {
				if ((Number(userInfo.value.hatchTodayNum) + Number(userInfo.value.hatchPerpetualNum)) > 0) {
					showCenter.value = true
				} else {
					showFailToast(locale.value == 'en' ? 'Currently, there are no incubation attempts available' :
						'当前暂无孵化次数')
				}
			}

			function jumpto(url) {
				router.push(url);
			}

			async function onConfirm() {
				showCenter.value = false
				const res = await hatch()
				if (res.code == 200) {
					fetchUserData()
					if (userInfo.value.superHatch == 1) { // 直接成功
						// 动效
						petUrl.value = res.data.pet.image
						emitGif()
					} else {
						inProgress.value = true
					}
				}
			}
			async function toBuy(type) { // type,1:购买孵化次数；2超级孵化购买
				showSuper.value = false
				showTimes.value = false
				let amount = type == 1 ? config.value[configKey[1]] * 1e9 : config.value[configKey[0]] * 1e9
				// TON转帐
				console.log(config.value[configKey[3]], amount.toString());
				const myTransaction = {
					validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
					messages: [{
						address: config.value[configKey[3]],
						amount: amount.toString(),
					}]
				}
				console.log(myTransaction, tonConnectUI);
				try {
					const res = await tonConnectUI.sendTransaction(myTransaction);
					confirmPay(type)
					console.log(111111, res);
				} catch (e) {
					console.log(e, typeof e);
					// showToast(e)
				}
			}
			async function confirmPay(type) {
				const result = await pay({
					type
				})
				if (result.code == 200) {
					showSuccessToast(result.msg)
					fetchUserData()
				}
			}
			return {
				showCenter,
				showSuper,
				showTimes,
				showGif,
				jumpto,
				inProgress,
				active,
				locale,
				onConfirm,
				userInfo,
				config,
				configKey,
				remainingSecond,
				toHatch,
				toBuy,
				totalSecond,
				showPet,
				showScale,
				petUrl

			}
		}
	}
</script>
<style scoped lang="scss">
	.page {
		position: relative;
		width: 100%;
		height: 100vh;
		background-image: url('/imgs/indexbg.png');
		background-attachment: fixed;
		background-size: 100% 100%;


		.iconWrap {

			&>.flex-bw {
				align-items: flex-start;

				.flex1 {
					align-items: center;
				}
			}

			img {
				height: 50px;
			}

			.super {
				position: absolute;
				right: 15px;
				bottom: 79px;
				width: auto;
			}
		}

		.btns {
			position: relative;
			z-index: 2;

			button {
				min-width: 110px;
				min-height: 35px;
				background: #413e5a;
				border: 2px solid #bfbcdb;
				border-radius: 5px;
				box-shadow: 0px 0px 0px 1px #1b1933 inset;
				font-size: 12px;
				line-height: 1.5;
			}

			.fs-16 {
				font-size: 16px;
			}
		}

		.progress {
			margin-top: 20px;
			gap: 10px;

			img {
				width: 30px;
				height: 30px;
			}

			.van_progress {
				position: relative;
				width: 180px;
				height: 30px;

				.countdown {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					justify-content: center;
				}
			}
		}

		:deep(.van-count-down) {
			color: #fff;
			font-size: 13px;
		}

		.icons {
			margin-bottom: 9px;
			position: relative;
			z-index: 9;
		}

		.mt-5 {
			margin-top: 5px;
		}

		.wrap {
			width: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -123px);
			align-items: center;

			.egg {
				width: 241px;
				height: 247px;
			}

			.income {
				width: 140px;
				height: 35px;
				background: #5a453e;
				border: 2px solid #ffe7ad;
				border-radius: 5px;
				box-shadow: 0px 0px 0px 1px #170b07 inset;
				justify-content: center;
				margin-top: -35px;

				span {
					line-height: 1;
					text-align: center;
				}

				.yellow {
					font-size: 16px;
					color: #F5BB30;
				}
			}

			.buttons {
				gap: 20px;
				margin-top: 45px;

				button {
					width: 150px;
					height: 40px;
					background: linear-gradient(180deg, #f8ce6e, #f58e2f 50%);
					border: 2px solid #ffe7ad;
					border-radius: 30px;
					box-shadow: 0px 6px 3px 0px rgba(255, 255, 255, 0.30) inset, 0px 3px 0px 0px #9e7512;
					-webkit-text-stroke: 0.5px #683a09;
					color: #fff;
					font-size: 16px;
					font-weight: 600;
					line-height: 1.5;
				}

				button:last-child {
					background: linear-gradient(180deg, #7c99df, #4f57e4 50%);
					border: 2px solid #b6caf5;
					box-shadow: 0px 6px 3px 0px rgba(255, 255, 255, 0.30) inset, 0px 3px 0px 0px #183d8a;
				}
			}
		}

		.modal {
			width: 325px;
			height: 200px;
			background: #302e43;
			border-radius: 10px;
			padding: 44px 40px;
			align-items: center;
			justify-content: space-between;
			font-size: 16px;

			.flex {
				gap: 45px;

				button {
					width: 100px;
					height: 40px;
					background: #545172;
					border-radius: 5px;
					font-size: 15px;
				}

				button:last-child {
					background: #f5bb30;
				}
			}
		}

		:deep(.van-popup) {
			background: transparent;
		}

		.modal1 {
			height: 300px;
			padding: 20px 10px 30px;
			font-size: 15px;

			.flex1 {
				align-items: center;
			}

			div {
				text-align: center;
			}

			img {
				width: 100px;
				height: 100px;
				margin-bottom: 15px;
			}
		}

		:deep(.van-progress__pivot),
		:deep(.van-progress) {
			width: 180px;
			height: 30px;
			background: #413e5a;
			border-radius: 3px;
		}
	}

	.gif {
		width: 100%;
	}

	.petImg {
		transition: transform .5s ease;
		transform: scale(0.5);
		/* 初始状态缩小 */
	}

	.petImg1 {
		transform: scale(1);
		/* 初始状态缩小 */
	}
</style>