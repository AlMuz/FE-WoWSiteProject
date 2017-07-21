import React from 'react';
import Navbar from '../components/navbar';
import VideoClass from '../components/video';
import FooterClass from '../components/FooterClass';
import Maincontent from '../components/maincont';


class Main extends React.Component{
  render(){
    return(
      <div className="container">
        <header className="header"></header>
        <nav className="navigation">
          <Navbar />
        </nav>
        <main className="content">
          <VideoClass/>
          <Maincontent name='A Method in the Madness'
            text='On June 24-25, esports legends went head-to-head in the third cup of the WoW Arena World Championships. Eight teams, ten epic matches, and a thirst for tournament glory.
            Before the broadcast was live, storylines had already begun. Champions of the previous cup BOYZZ were nowhere to be seen after an earthshock-ing result at the hands of Æerø die Maschine.'
          />
          <Maincontent name='Patch 7.2.5 Has Arrived'
            text='Patch 7.2.5 has arrived, and with it comes a variety of content updates, including Black Temple Timewalking, the Deaths of Chromie, the Trial of Style, and more. You’ll also soon be able to delve into the Tomb of Sargeras raid dungeon.'
          />
          <Maincontent name='Rock Out with Hellfest and Win Big!'
            text='The hordes will descend upon Clisson, France on June 16-18 for the renowned Hellfest rock festival. Follow along on Twitter for your chance to win some epic loot including a custom WoW-themed Gibson SG Faded 2017 T guitar!'
          />
          <Maincontent name='This Month in WoW: July'
            text='July starts off in Azeroth with bursts of flying color throughout the capital cities as the Midsummer Fire Festival comes to a close. While the holiday may be ending, the work within the Tomb of Sargeras continues this month as raiders continue to plumb its danger-filled depths. But, don’t worry. It won’t all be serious business when the main auction houses in Orgrimmar and Stormwind set up Azeroth’s biggest dance parties.'
          />

        </main>
        <FooterClass/>
      </div>
    );
  }
}

export default Main;
