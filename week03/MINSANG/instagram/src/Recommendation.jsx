import RecommendUser from "./RecommendUser";

import profile from "./assets/storyprofile.png";


export default function Recommendation() {
    return (
        <div className="flex flex-col">
            <RecommendUser profileImg={profile} id="minttkd_" subText="차민상" buttonText="전환"></RecommendUser>
            <div className="flex items-center justify-between px-2">
                <span className="text-xs px-2">회원님을 위한 추천</span>
                <span className="text-xs px-2">모두 보기</span>
            </div>
            <RecommendUser profileImg={profile} id="신하빈" subText="minttkd_1님 외2명이 팔로우합니다" buttonText="팔로우"></RecommendUser>
            <RecommendUser profileImg={profile} id="박진우" subText="minttkd_1님 외2명이 팔로우합니다" buttonText="팔로우"></RecommendUser>
            <RecommendUser profileImg={profile} id="이준호" subText="minttkd_1님 외2명이 팔로우합니다" buttonText="팔로우"></RecommendUser>
        </div>

    );
}