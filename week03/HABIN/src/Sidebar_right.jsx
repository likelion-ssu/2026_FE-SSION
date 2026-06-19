import Recommend_friend from "./recommend_friend";

function Sidebar_right() {
    return (
        <footer className="w-95.75 h-213.75 p-[0px_0px_0px_64px]">
            <div className="w-97.75 h-137 m-[36px_0px_0px]">
                <Recommend_friend id ={"HABIN"} name={"신하빈"} content ={"전환"} />
                <div className="w-79.75 h-87.75 m-[24px_0px_8px]">
                    <div className="flex flex-row item-center content-start w-79.75 h-4.75 p-[4px_16px]">
                        <p className="text-sm w-[242.29px] h-2.75">회원님을 위한 추천</p>
                        <p className="text-xs">모두보기</p>
                    </div>
                    <div clasName="flex flex-col content-start w-[315px] h-[316px] px-[8px]">
                        <Recommend_friend id ={"LION01"} name={"아기사자01"} content ={"팔로우"} />
                        <Recommend_friend id ={"LION02"} name={"아기사자02"} content ={"팔로우"} />
                        <Recommend_friend id ={"LION03"} name={"아기사자03"} content ={"팔로우"} />
                        <Recommend_friend id ={"LION04"} name={"아기사자04"} content ={"팔로우"} />
                        <Recommend_friend id ={"LION05"} name={"아기사자05"} content ={"팔로우"} />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Sidebar_right;
