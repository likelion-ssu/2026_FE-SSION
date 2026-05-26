import "./App.css"
import Sidebar from "./components/Sidebar";
import Story from "./components/Story";
import Recommend from "./components/Recommend";

import wdohwanImg from "./assets/wdohwan.png";
import pampermoonyImg from "./assets/pampermoony.png";
import ssodamImg from "./assets/ssodam.png";

function App() {
    return (
        <div className="flex justify-start bg-black text-white font-sans">
            <Sidebar></Sidebar>

            {/* 가운데 메인 피드 */}
            <div className="w-[650px] px-[80px] py-[30px]">
                <Story></Story>

                {/* 게시글 */}
                <div id="center-bottom">
                    <div className="mb-10 w-full">
                            <div className="flex items-center gap-2.5 py-[15px] text-sm font-bold">
                                <img className="h-8 w-8 rounded-full object-cover" src="/src/assets/cutepets.png" alt="cutepets" />
                                <span>bonnie.cutepets</span>
                                <span className="font-normal text-gray-500">• 6시간</span>
                                <i className="bi bi-three-dots ml-auto"></i>
                            </div>
                        <div className="flex h-[500px] items-center justify-center overflow-hidden rounded-[5px] bg-[#222]">
                            <img className="block h-full w-full object-cover" src="/src/assets/post-image.png" alt="post" />
                        </div>
                        <div className="flex items-center gap-[15px] py-[15px] text-[22px]">
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-arrow-left-right"></i>
                            <i className="bi bi-send"></i>
                            <i className="bi bi-bookmark ml-auto"></i>
                        </div>
                        <div className="flex items-center gap-2.5 pb-2.5">
                            <img className="h-[17px] w-[17px] rounded-full object-cover" src="/src/assets/profile.png" alt="profile" />
                            <span>seo_ye0n4님 여러 명이 좋아합니다</span>
                        </div>
                        <div className="text-sm">
                            <span className="mr-[5px] font-bold">bonnie.cutepets</span>
                            <span>New pet (now it’s not afraid of me anymore)#CutePetDebutPlan #Puppy #dogbaby</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 오른쪽 추천 영역 */}
            <div className="w-[350px] px-5 py-[30px]">
                <div className="mb-[25px] flex items-center justify-between">
                    <img className="h-[45px] w-[45px] rounded-full" src="/src/assets/profile.png" alt="profile" />
                    <div className="ml-2.5 flex flex-1 flex-col font-bold">
                        <span>seo_ye0n4</span>
                        <span className="text-sm font-normal text-gray-500">박서연</span>
                    </div>
                    <span className="cursor-pointer text-xs font-bold text-[#0095f6]">전환</span>
                </div>

                <div className="mb-5 flex justify-between text-sm font-bold">
                    <span>회원님을 위한 추천</span>
                    <span>모두 보기</span>
                </div>

                <div id="right-bottom">
                    {/* 계정 추천 */}
                    <Recommend
                        image={wdohwanImg}
                        username="wdohwan"
                        followInfo="yy_0n0님 외 7명이 팔로우합니다"
                    />
                    <Recommend
                        image={pampermoonyImg}
                        username="pampermoony"
                        followInfo="yy_0n0님 외 2명이 팔로우합니다"
                    />
                    <Recommend
                        image={ssodamImg}
                        username="ssodam_xoxo"
                        followInfo="frog님 외 1명이 팔로우합니다"
                    />  
                </div>
            </div>
        </div>
    );
}

export default App;
