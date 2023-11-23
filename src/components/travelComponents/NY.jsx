import amtrak from '../../images/ny/ny.gif';
import shawarma from '../../images/ny/shawarma.jpeg';
import view from '../../images/ny/viewnyc.jpeg';
import bball from '../../images/ny/bball.jpeg';
import dinner from '../../images/ny/dinner.jpeg';
import waternyc from '../../images/ny/waternyc.jpeg';
import pepsi from '../../images/ny/pepsi.jpeg';
import drive from '../../images/ny/drive.gif';

export default function NY() {
  return <div className="trip">
          <h1>New York, New York</h1>
          <h3>Jul. 24 - 27</h3>
          <img src={amtrak} alt="view of nyc in the distance"/>
          <p>
            I took the Amtrak from Kingston, RI to Grand Central to visit my summer internship's (Guardian Life) office for the week. 
            It was my first time ever being sponsored for a trip so it felt very special.
          </p>
          <p>
            During the train ride, I ended up sitting across from a recruiter for the TV show Chopped! I quietly eavesdropped her interviewing a candidate for an 
            upcoming season. Besides that, the train ride overall was pretty peaceful and I managed to get some work done for my final project.
          </p>
          <p>
            I stayed at 'The New Yorker' hotel, which was well known for hosting US soldiers during WW2. 
            It definitely had a timely, old-fashioned vibe which I liked. After checking in I walked around Times Square, then ate a gyro and some frozen yogurt.
            I ended up going to this gyro spot because it was the only place I could find without a line - it was completely empty really - but it was so good! I've visited NYC a few times throughout my life, and the food has always been 
            one of the best parts of the city. 
          </p>
          <img src={shawarma} alt="shawarma looking sculpture" />
          <img src={view} alt="view from office" />
          <p>The next day I walked to the office and got to see "The Vessel", AKA the Shawarma. The office itself was really beautiful! I got to meet a bunch of other interns, and a couple members from my team who I've been working with remotely over the summer.</p>
          <p>
            After work I went with a few other interns to a Yankees VS Mets game, and even roleplayed as a Yankees fan by buying & changing into a Yankees Shirt. My Red-Sox family would be ashamed but it was a lot of fun! 
          </p>
          <img src={bball} alt="view of yankee stadium" />
          <p>
            The following day the office was nearly packed! I got to meet my manager in-person, and a bunch of software engineers in the rotational program came to visit the office also. My manager took the team out to dinner at a French restaurant in Hell's Kitchen,
            where I got to try escargot for the first time. It reminded me a bit of garlicky calamari crossed with an oyster. I ordered the roasted duck with clementines and really enjoyed it. Prior to this I had never tried French food, and had only heard through other people that French food is really good. Now I can confidently say through my own experience that French food is indeed really good.
          </p>
          <img src={dinner} alt="roasted duck" />
          <p>
            Afterwards I went out with the other interns I'd been getting to know to a local bar and then we explored the city a bit! We checked out this view of NY from Queens, the Pepsi-Cola sign, and drove around to see the sights. I definitely want to come back someday soon to see the Brooklyn Bridge during the sunrise.
          </p>
          <img src={waternyc} alt="paige in front of river" />
          <img src={pepsi} alt="pepsicola sign" />
          <img src={drive} alt="view of nyc while driving" />
          <p>
            Everyone I met was so welcoming, friendly and fun to talk to. These few days were a highlight of the year for me :)
          </p>
  </div>
}
