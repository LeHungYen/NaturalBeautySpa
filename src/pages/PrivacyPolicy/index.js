import { getDict } from '../../services/dict';
import style from './index.module.scss'
import React from 'react';
function PricacyPolicy() {

    const privacyPolicy = getDict("pricacyPolicy_policy_p").replace(/<br\s*\/?>/g, ' ');
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.bannerBackground}>
                    <img src="https://mareve.co.jp/wp-content/uploads/2020/10/pixta_69495304_M.jpg"></img>
                </div>
                <div className={style.bannerText}>
                    <div className={style.text}>
                        <p className={style.title}>個人情報保護方針</p>
                    </div>
                </div>
            </div>

            <div className={style.policy}>
                <p style={{ overflowWrap: 'break-word' }}>{getDict("pricacyPolicy_policy_p")}</p>
                {/* <div style={{ whiteSpace: 'pre-line' }}>
                    {privacyPolicy.split('<br/>').map((line, index) => (
                        <React.Fragment key={index}>
                            <span>{line}</span>
                            {index === 0 ? <br style={{ marginTop: '2px' }} /> : <br style={{ marginTop: '5px' }} />}
                        </React.Fragment>
                    ))}
                </div> */}
            </div>
        </div>
    );
}

export default PricacyPolicy
