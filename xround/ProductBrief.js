import {convertTableRawData} from "./utils";

export function ProductBrief({
                                 productBriefList
                             }) {
    return <div className="product-breif-list--wrapper row">
        {productBriefList.map((briefData) => (
            <a href={`#${briefData.id}`} className="product-item col-md-3 col-12">
                <div className="product-img--wrapper">
                    <img className="logo" src={briefData.logoImg}/>
                    {briefData.image && <img src={briefData.image}/>}
                </div>
                <h2>{briefData.title}</h2>
                <table>
                    {convertTableRawData(briefData.tableData).map((datas, i) => (
                        <tr key={i}>
                            <td dangerouslySetInnerHTML={{__html: datas[0],}}/>
                            <td dangerouslySetInnerHTML={{__html: datas[1],}}/>
                        </tr>
                    ))}
                </table>
            </a>
        ))}
    </div>;
}
