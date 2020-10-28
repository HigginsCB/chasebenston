import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <Grid container justify="center" spacing={5} style={{ paddingTop: "25px" }}>
                <Grid item xs="4">
                    <img
                        src="https://media-exp1.licdn.com/dms/image/C4D03AQH6ilz88crKWg/profile-displayphoto-shrink_800_800/0?e=1609372800&v=beta&t=0UN09sp8EfiFHkbrXMlwZZ5I828r6XqFsqAScAx6w3c"
                        style={{width: "100%", paddingTop: "10%"}}
                    />
                </Grid>
                <Grid item xs="8">
                    <div>
                        <Typography>Most of my freetime has been spent on the computer, whether it be gaming, video editing, or just hanging out watching shows. 
                            In May of 2020 I graduated from Indiana University - Southeast with a Bachelors of Science in Computer Science and a minor in Business. 
                            As a new graduate I am currently pursuing a career in the Software Engineering field with availability to relocate and start immediately.
                        </Typography>
                        <Typography>Since graduation I have been keeping my development skills sharp by completing challenges on various websites (HackerRank, Leetcode, etc.) and collecting <Link to={'/chasebenston/awards'} style={{ color: "inherit" }}>awards</Link> such as badges and skill verifications. 
                            After completing my capstone group <Link to={'/chasebenston/projects'} style={{ color: "inherit" }}>project</Link> using a React and .NET stack I have started development on a personal vlog/blog site for my hobbies using a MERN stack. 
                            In the meantime I have also been freelancing for my fiance's company (Vividly Bold) to consult with clients on their wishes for WordPress site developments.
                        </Typography>
                        <Typography>Outside of software engineering I have expanded my skills and hobbies during the social distancing of the pandemic. 
                            I have edited videos (using Premiere Pro) from my trip around the world (The Mongol Rally 2018) and have begun working on some videos around games and other hobbies that I have been expanding during this time. 
                            With the extra time at home I have been able to spend more time learning to cook meals from scratch as well as beginning the long painful journey into physical fitness. 
                            Planning for my next trip abroad, I have also begun learning the basics of Japanese and Korean. 
                            I am happy I was able to turn a time of low opportunity professionally into a time for personal experience, but I am ready to jump into my journey as a Software Development Engineer!
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>    
    );
}

export default Home;