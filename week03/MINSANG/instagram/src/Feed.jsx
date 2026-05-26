import Story from './Story'

import storyprofile from './assets/storyprofile.png';
import etc from './assets/etc.png';
import feedimg from './assets/feedimg.jpg';
import heart from './assets/alram.png';
import comment from './assets/comment.png';
import repost from './assets/repost.png';
import send from './assets/message.png';
import bookmark from './assets/bookmark.png';


export default function Feed() {
    return (
        <main className='flex flex-col items-center w-[470px] p-6 ml-[300px] gap-6'>
            <div className="flex flex-row justify-between">
                <Story storyprofile={storyprofile} name="minttkd_1"></Story>
                <Story storyprofile={storyprofile} name="minttkd_2"></Story>
                <Story storyprofile={storyprofile} name="minttkd_3"></Story>
                <Story storyprofile={storyprofile} name="minttkd_4"></Story>
                <Story storyprofile={storyprofile} name="minttkd_5"></Story>
                <Story storyprofile={storyprofile} name="minttkd_6"></Story>
            </div>
            
            <article className=' flex flex-col w-full mx-auto'>
                <div className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-2">   
                        <img src={storyprofile} alt="minttkd_1" className="w-8 h-8" />
                        <span className='text-sm'>minttkd_1</span>
                        <span className="text-neutral-500 text-xs">• 51분</span>
                    </div>
                    <div>
                        <img src={etc} alt="etc" className="w-5 h-5" />
                    </div>
                </div>
                <div>
                    <img src={feedimg} alt="feedimg" className="w-full" />
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center p-2 gap-3">
                            <img src={heart} alt="heart" className="w-6 h-6" />
                            <img src={comment} alt="comment" className="w-6 h-6" />
                            <img src={repost} alt="repost" className="w-6 h-6" />
                            <img src={send} alt="send" className="w-6 h-6" />
                        </div>
                        <div className="flex items-center p-2 gap-3">
                            <img src={bookmark} alt="bookmark" className="w-6 h-6" />
                        </div>
                    </div>
                    <p className='text-xs p-1'>minttkd_2님 외 10명이 좋아합니다</p>
                    <p className='text-xs p-1'>minttkd_1 카와이</p>
                </div>  
            </article>
        </main>
    );
}