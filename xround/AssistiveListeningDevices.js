import "./styles.css";

// TODO
const productBriefImgList = [
    "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR2render.5.png?v=1708178477",
    "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR_6_1.png?v=1692339776",
    "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/HEAR2_1.png?v=1708235736",
    "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/hear_RIC_id2.png?v=1708235638",
];

const productIds = ["TEK_ASSISTIVE", "VOCA_ASSISTIVE", "TV_TRANSMITTER", "WIRELESS_MIC", "TREK_OPEN_EAR"];

const productTitles = [
    "TEK Assistive Listening\n" + "TV Headset",
    "VOCA Assistive Listening \n" + "TV Headset",
    "TV Transmitter",
    "Wireless Mic\n" + "(Transmitter & Receiver)\n",
    "TREK Open Ear Headset\n" + "(Adaptive OWS )\n"
];

// TODO
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
Bluetooth® 5.3 (Auracast)
Self-Fitting
XROUND MyTune
Max. SPL 
108 dB
ANC
Yes
Frequency range
20-40K Hz`,
    `Bluetooth
Bluetooth® 5.3 (Auracast)
Self-Fitting
XROUND MyTune Pro
Max. SPL
123 dB
ANC
Yes
Frequency range
20-20K Hz`,
    `Bluetooth
Bluetooth® 5.3 (Auracast)
Latency 
<60ms
Audio input
SPDIF, AUX, MIC record, HDMI
Operation range
Up to 30m`,
    `Bluetooth
Bluetooth® 5.3 (Auracast)
Latency 
<60ms
Bluetooth mode
BIS, Classic
Audio input
Mic, AUX 
Operation range
Up to 30m`,
];

// TODO
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

const productDetailListData = Array(4)
    .fill(0)
    .map((_, idx) => ({
        id: productIds[idx],
        title: productTitles[idx],
        imgList: productDetailImgList[idx],
        tableData: productDetailDataList[idx],
    }));

function convertTableRawData(productDetailRawData) {
    let res = [];
    const splitTableDataList = productDetailRawData.split("\n");
    for (let i = 0; i < splitTableDataList.length / 2; i++) {
        res.push([splitTableDataList[i * 2], splitTableDataList[i * 2 + 1]]);
    }
    return res;
}

// TODO
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

export function AssistiveProductBrief() {
    return (
        <div className="product-breif-list--wrapper row">
            {productBriefDataList.map((briefData) => (
                <a href={`#${briefData.id}`} className="product-item col-md-3 col-12">
                    <div className="product-img--wrapper">
                        <img className="logo" src={briefData.logoImg}/>
                        {briefData.image && <img src={briefData.image}/>}
                    </div>
                    <h2>{briefData.title}</h2>
                    <table>
                        {convertTableRawData(briefData.tableData).map((datas, i) => (
                            <tr key={i}>
                                <td
                                    dangerouslySetInnerHTML={{
                                        __html: datas[0],
                                    }}
                                />
                                <td
                                    dangerouslySetInnerHTML={{
                                        __html: datas[1],
                                    }}
                                />
                            </tr>
                        ))}
                    </table>
                </a>
            ))}
        </div>
    );
}

export const AssistiveProductDetail = () => {
    return (
        <div className="product-detail-list--wrapper">
            {productDetailListData.map((product) => (
                <div id={`${product.id}`} className="product-detail--wrapper row">
                    <div className="product-swiper col-12 col-md-6">
                        <h4>{product.title}</h4>
                        <swiper-container
                            slides-per-view="1"
                            loop="true"
                            thumbs-swiper={`.thumbnail-swiper-${product.id}`}
                            space-between="10"
                            navigation="true"
                        >
                            {product.imgList.map((img) => (
                                <swiper-slide>
                                    <img src={img} alt=""/>
                                </swiper-slide>
                            ))}
                        </swiper-container>
                        <swiper-container
                            class={`thumbnail-swiper-${product.id}`}
                            slides-per-view="3"
                            watch-slides-progress="true"
                            free-mode="true"
                            loop="true"
                        >
                            {product.imgList.map((img) => (
                                <swiper-slide>
                                    <img src={img} alt=""/>
                                </swiper-slide>
                            ))}
                        </swiper-container>
                        <div className="logo-list--wrapper">
                            <a href={"#"}>
                                <img
                                    src={
                                        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/GooglePlay.png?v=1708336209"
                                    }
                                />
                            </a>
                            <a href={"#"}>
                                <img
                                    src={
                                        "https://cdn.shopify.com/s/files/1/0006/0394/7073/files/AppStore.png?v=1708336209"
                                    }
                                />
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <table>
                            {convertTableRawData(product.tableData).map((datas, i) => (
                                <tr key={i}>
                                    <td
                                        dangerouslySetInnerHTML={{
                                            __html: datas[0],
                                        }}
                                    />
                                    <td
                                        dangerouslySetInnerHTML={{
                                            __html: datas[1],
                                        }}
                                    />
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};
