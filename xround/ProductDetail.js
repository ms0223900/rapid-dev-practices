import { convertTableRawData } from "./utils";

export function ProductDetail({
                                  productDetailList
                              }) {
    return <div className="product-detail-list--wrapper">
        {productDetailList.map((product) => (
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
                        {product.logos.map(logo => (
                            <a href={logo.link} target="_blank">
                                <img src={logo.img}/>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <table>
                        <tr>
                            <td colSpan={2}>
                                Sample Specification
                            </td>
                        </tr>
                        {convertTableRawData(product.tableData).map((datas, i) => (
                            <tr key={i}>
                                <td dangerouslySetInnerHTML={{ __html: datas[0], }}/>
                                <td dangerouslySetInnerHTML={{ __html: datas[1], }}/>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        ))}
    </div>;
}
