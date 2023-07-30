import SideBar from "@/app/components/Sidebar";

const ChallengeDetail = () => {
    return (
        <main className="main">
            <SideBar />
            <div className="daily-section" data-page-type="detail">
                <div className="challenge-banner">
                    <div className="cover-wrapper">
                        <img src='https://cdn.discordapp.com/attachments/1049692305331851317/1134111946170437712/1500x500.jpg'/>
                    </div>
                    <div className="challenge-info">
                        <div className="info-wrapper">
                            <div className="name">1999년 처럼 살아보기</div>
                            <div className="desc">Reverse: 1999의 1999년 처럼 살아보기  </div>
                        </div>
                    </div>
                </div>  
                <div className="section-content">
                    <div className="header">
                        {/* 챌린지 생성자만 가능 */}
                        
                        <div className="header-edit">
                            <div className="daily-btn">수정하기</div>
                        </div>

                        {/* 챌린지 비참여자만 보임 */}
                        <div className="header-join">
                            <div className="daily-btn">한 번 참여해 보기</div>
                        </div>

                        {/* 챌린지 참여자만 보임 */}
                        <div className="header-article-upload">
                            <div className="daily-btn">결과 공유</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default ChallengeDetail