import React from 'react';
import '../../custom.css';


const PlayList = () => {

    return (
        <div class="music_player">
            <div class="artist_img">
                <img src="https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg" alt="artist-img" />
            </div>
            <div class="time_slider">
                <span class="runing_time">0:00</span>
                <input type="range" value="0" />
                <span class="song_long">0:00</span>
                <div class="now_playing">
                    <i class="fa fa-refresh" aria-hidden="true"></i>

                    <p> now playing </p>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                </div>
                <div class="music_info">
                    <h2>adele</h2>
                    <p class="date">12 - 2016</p>
                    <p class="song_title">Rolling in the deep</p>
                </div>
                <div class="controllers">
                    <i class="fa fa-music" aria-hidden="true"></i>
                    <i class="fa fa-fast-backward" aria-hidden="true"></i>
                    <i class="fa fa-play" aria-hidden="true"></i>
                    <i class="fa fa-fast-forward" aria-hidden="true"></i>
                    <i class="fa fa-retweet" aria-hidden="true"></i>
                </div>
            </div>
            <div class="song_list">
                <div class="title">song name</div>
                <div class="title">artist name</div>
                <div class="title dark">song name</div>
                <div class="title dark">artist name</div>
            </div>
        </div>

    );

}

export default PlayList;
