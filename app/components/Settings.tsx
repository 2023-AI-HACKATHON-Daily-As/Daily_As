const Settings = () => {
    const settingsClose = () => {
        const settings = document.querySelector('.settings-modal');

        settings?.classList.remove('active');
    }
    return (
        <div className="settings-modal">
            <div className="modal-container">
                <div className="modal-head">
                    <div className="title">
                        <h1>설정</h1>
                    </div>
                    <div className="close" onClick={settingsClose}>
                        <img src='/UI/img/close.png'/>
                    </div>
                </div>
                <div className="modal-content">
                    <div className="settings-item">
                        <div className="settings-title">
                            <h1>사용자 계정</h1>
                        </div>
                        <div className="settings-content">
                            <div className='account-info__display'>
                                <div className='daily-account-item account__displayIMG'>
                                    <img src='/UI/img/default_profile.png'/>
                                </div>
                                <div className='daily-account-item account__displayName'>
                                    <div className="account-name">
                                        <span className='account-name'>사용자</span>
                                        <div className='account-social'>
                                            <div className="social-logo">
                                                
                                            </div>
                                            <span className='email'>example@dailyas.info</span>
                                        </div>
                                    </div>
                                    <div className="account-btn">수정하기</div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings