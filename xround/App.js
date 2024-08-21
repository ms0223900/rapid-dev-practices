import "./styles.css";
import { OTCProductBrief, OTCProductDetail } from "./OTCHearingAid";
import { AssistiveProductBrief, AssistiveProductDetail, } from "./AssistiveListeningDevices";
import { TabHeader } from "./TabHeader";

const mails = ["cehsu@xroundaudio.com"].join(";");

const SideFloatingLinks = () => (
    <div className="side-floating-links">
        <a href={`mailto:${mails}`}>
            <img src="https://cdn.shopify.com/s/files/1/0006/0394/7073/files/icon_mail_outline-24px.svg?v=1708351434"/>
        </a>
        <a href={"https://calendly.com/cehsu/30min"} target="_blank">
            <img
                src="https://cdn.shopify.com/s/files/1/0006/0394/7073/files/icon_calendar_month-24px.svg?v=1708351446"/>
        </a>
    </div>
);

const App = () => (
    <div className={"App"}>
        <TabHeader activeLabel={'OTC Hearing Aids'}/>
        <OTCProductBrief/>
        <OTCProductDetail/>

        <TabHeader activeLabel={'Assistive Listening Devices'}/>
        <AssistiveProductBrief/>
        <AssistiveProductDetail/>

        <SideFloatingLinks/>
    </div>
);
export default App;
