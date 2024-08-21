import "./styles.css";
import { ProductDetail } from "./ProductDetail";
import { ProductBrief } from "./ProductBrief";

const productBriefImgList = [
    "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR2render.5.png?v=1708178477",
    "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR_6_1.png?v=1692339776",
    "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR2_1.png?v=1708235736",
    "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/hear_RIC_id2.png?v=1708235638",
];

const productIds = ["HearSE", "Hear", "Hear2", "Hear2Pro"];

const productTitles = [
    "HEAR SE\nSmart Wireless OTC Hearing Aid",
    "HEAR\nSmart Wireless" + "OTC Hearing Aid",
    "HEAR 2\nSmart Wireless" + "OTC Hearing Aid\n",
    "HEAR 2 Pro\nSmart Wireless" + "OTC Hearing Aid\n",
];

const productDetailImgList = [
    [
        // HEAR SE
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR2render.1_XR.png?v=1708178477",
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR2render.5.png?v=1708178477",
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR2render.4.png?v=1708178477",
    ],
    [
        // HEAR
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR_6.png?v=1708175100",
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR_5.png?v=1708175100",
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR_N_2.png?v=1708175101",
    ],
    [
        // HEAR 2
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR2_1.png?v=1708235736",
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR2_2.png?v=1708235736",
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR2_3.png?v=1708235736",
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR2_4.png?v=1708235737",
    ],
    [
        // HEAR PRO
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/hear_RIC_id1_1b8ba740-6c7b-4f04-a351-fc53849f98a5.png?v=1708235638",
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/hear_RIC_id2.png?v=1708235638",
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/hear_RIC_id5.png?v=1708235638",
        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/hear_RIC_id7.png?v=1708235638",
    ],
];
const productBriefRawDataList = [
    `Bluetooth
Bluetooth® 5.2
Self-Fitting
DSLv5NAL – NL2<br />XROUND MyTune Pro
OSPL90
110 dB SPL
HFA-FOG
35 dB
Noise Reduction
Single mic NR`,
    `Bluetooth
Bluetooth® 5.2
Self-Fitting
DSLv5 or NAL – NL2<br />XROUND MyTune Pro
OSPL90
110 dB SPL
HFA-FOG
40 dB
Noise Reduction
Beam Forming`,
    ` Bluetooth
Bluetooth® 5.3
Self-Fitting
NAL – NL2<br />XROUND MyTune Pro
OSPL90
116 dB SPL
HFA-FOG
30dB or 43 dB<br />(Solution-based)
Noise Reduction
Beam Forming`,
    ` Bluetooth
Bluetooth® 5.3
Self-Fitting
NAL – NL2<br />XROUND MyTune Pro
OSPL90
117 dB SPL
HFA-FOG
55 dB
Noise Reduction
AI noise reduction`,
];

const productDetailDataList = [
    `Color/Logo
As per customer request
Bluetooth
Bluetooth® 5.3, Class2
Bluetooth Profile
SBC、AAC
Multi-band WDRC
16 Bands
Audio Stream by BT
Yes
Hands–free calling
Yes
Self-Fitting
Reference prescription DSLv5
Max Output (OSPL90)1 / 1.6 / 2.5kHz
110 dB SPL (Dynamic Driver)
HFA-FOG
35 dB
RTG
35 dB
EIN
<16 dB
Frequency Range
100~8000  / 20~20K (Hz)
Noise Filtering
Yes
Directional Focus (Beam-Forming)
N/A
Microphones
4 * MEMS
Range
10m / open area up to 50m
Battery Life
A2DP＋HA：7HR｜with Charging Box 21HR<br />HA only：7.5HR｜with Charging Box 23HR
Interface 
Input：Type-C
Waterproof
IPX4
iOS & Android APP
MyTune Pro`,
    ` Color/Logo
As per customer request
Bluetooth
Bluetooth® 5.3, Class1
Bluetooth Profile
SBC、AAC
Multi-band WDRC
16 Bands
Audio Stream by BT
Yes
Hands–free calling
Yes
Self-Fitting
Reference prescription DSLv5
Max Output (OSPL90)1 / 1.6 / 2.5kHz
110 dB SPL (Dynamic Driver)
HFA-FOG
40 dB
RTG
30 dB
EIN
16 dB
Frequency Range
100~8000  / 20~20K (Hz)
Noise Filtering
Yes
Directional Focus
Yes
Microphones
4 * MEMS (2MIC Beamforming)
Range
15m / open area up to 80m
Battery Life
A2DP＋HA：9HR｜with Charging Box 32HR<br />HA only：12HR｜with Charging Box 42HR
Interface 
Input：Type-C｜Qi Wireless Charging
Waterproof
IP55
iOS & Android APP
MyTune Pro`,
    ` Color/Logo
As per customer request
Applications
Smart hearable | Earbuds | PSAP | OTC hearing aid
FDA product code
QUG or QUH
Chipsets
AIROHA AB1585H (12nm process)
Active Noise Cancellation
Adaptive Hybrid ANC
Bluetooth
Bluetooth® 5.3, Class1
Bluetooth Profile
SBC、AAC、LDAC、LC3 (Auracast)
Multi-band WDRC
18 Bands
Hands–free calling
AI Beam-forming noise reduction
Self-Fitting
Reference prescription NAL-NL2
Max Output (OSPL90)
116 dB SPL Knowles RAQ Balanced Armature
HFA-FOG
40 dB
Frequency Range
Hearing Aid: 100~12500 (Hz)  / Music: 20~40K (Hz)
Hearing Aid Features
Own voice reduction<br />Real ear measurement<br />AI Beam-forming conversation boost
Microphones
6 * MEMS (2MIC Beamforming)
Battery Life
A2DP＋HA：12HR｜with Charging Box 36HR<br />HA only：14HR｜with Charging Box 40HR
Waterproof
IP55
iOS & Android APP
MyTune Pro self-fitting app`,
    ` Color/Logo
As per customer request
Bluetooth
Bluetooth® 5.3, Class1
Bluetooth Profile
SBC、AAC、LC3 (Auracast) 
Multi-band WDRC
18 Bands
Audio Stream by BT
Yes
Hands–free calling
Yes
Self-Fitting
Reference prescription NAL-NL2
Max Output (OSPL90)1 / 1.6 / 2.5kHz
117 dB SPL Knowles RAQ BA
HFA-FOG
55 dB
RTG
TBD 
EIN
TBD 
Frequency Range
100~12500  / 20~20K (Hz)
Noise Reduction
AI noise reduction 
Beam forming
Yes
Microphones
4 * MEMS (2MIC Beamforming)
Range
15m / open area up to 80m
Battery Life
A2DP＋HA：?HR｜with Charging Box ?HR<br />HA only：?HR｜with Charging Box ?HR
Interface 
Input：Type-C｜Qi Wireless Charging
Waterproof
IP67
iOS & Android APP
MyTune Pro
Sensor
Accelerometer`,
];

const productDetailLogoList = [
    [
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/GooglePlay.png?v=1708336209",
            link: 'https://play.google.com/store/apps/details?id=com.xroundaudio.controlapp',
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/AppStore.png?v=1708336209",
            link: 'https://apps.apple.com/tw/app/xround-mytune/id1525181445',
        },
    ],
    [
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/GooglePlay.png?v=1708336209",
            link: 'https://play.google.com/store/apps/details?id=com.xroundaudio.controlapp',
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/AppStore.png?v=1708336209",
            link: 'https://apps.apple.com/tw/app/xround-mytune/id1525181445',
        },
    ],
    [
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/GooglePlay.png?v=1708336209",
            link: 'https://play.google.com/store/apps/details?id=com.xroundaudio.controlapp',
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/AppStore.png?v=1708336209",
            link: 'https://apps.apple.com/tw/app/xround-mytune/id1525181445',
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/AURA_LOGO.png?v=1710162930",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/AIROHA.png?v=1708336209",
        },
    ],
    [
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/GooglePlay.png?v=1708336209",
            link: 'https://play.google.com/store/apps/details?id=com.xroundaudio.controlapp',
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/AppStore.png?v=1708336209",
            link: 'https://apps.apple.com/tw/app/xround-mytune/id1525181445',
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/AURA_LOGO.png?v=1710162930",
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/AIROHA.png?v=1708336209",
        },
    ],
];
const productDetailListData = Array(4)
    .fill(0)
    .map((_, idx) => ({
        id: productIds[idx],
        title: productTitles[idx],
        imgList: productDetailImgList[idx],
        tableData: productDetailDataList[idx],
        logos: productDetailLogoList[idx]
    }));
const productImgList = [
    "",
    "",
    "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/AURACAST.png?v=1708336209",
    "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/AURACAST.png?v=1708336209",
];
const productBriefDataList = Array(4)
    .fill(0)
    .map((_, idx) => ({
        id: productIds[idx],
        logoImg: productImgList[idx],
        title: productTitles[idx],
        image: productBriefImgList[idx],
        tableData: productBriefRawDataList[idx],
    }));

export const OTCProductBrief = () => <ProductBrief productBriefList={productBriefDataList}/>;

export const OTCProductDetail = () => <ProductDetail productDetailList={productDetailListData}/>;
