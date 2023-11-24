import britishDuck from '../../images/uk/britishduck.png';
import newfriends from '../../images/uk/newfriends.png';
import bus from '../../images/uk/bus.gif';
import tube from '../../images/uk/tube.jpeg';
import museum from '../../images/uk/museum.jpeg';
import abbey from '../../images/uk/abbey.jpeg';
import borough from '../../images/uk/burroughmarket.png';
import englishbrek from '../../images/uk/englishbrek.jpeg';
import hamilton from '../../images/uk/hamilton.png';
import liner from '../../images/uk/liner.jpeg';
import yorkminster from '../../images/uk/yorkminster.jpeg';
import lolli from '../../images/uk/lolli.png';
import street from '../../images/uk/street.jpeg';
import traintoedin from '../../images/uk/traintoedin.gif';
import edin1 from '../../images/uk/edinburgh1.jpeg';
import edin2 from '../../images/uk/edinburgh2.jpeg';
import edin3 from '../../images/uk/edinburgh3.jpeg';
import uni from '../../images/uk/uni.jpeg';
import uni2 from '../../images/uk/uni2.jpeg';

export default function UK() {
  return <div className="trip">
          <h1>United Kingdom</h1>
          <h3>Aug. 26 - Sep. 6</h3>
          <br/>
          <h1>London, England</h1>
          <h3>Landing</h3>
          <p>
            I took an overnight flight from Logan INTL to Heathrow, leaving Saturday evening and arriving at 7 AM Sunday morning. I didn't get any sleep which was a mistake, but I blame British Airlines
            for including video games in their in-flight entertainment (this isn't really a complaint, I loved it and more airlines need to do this). Next I took an express train to Paddington station.
          </p>
          <p>
            Despite not getting any sleep I was filled to the brim with adrenaline after stepping outside of Paddington. This was my first ever solo-trip to a different continent, so I was equal parts nervous and excited. Walking to my hostel, I crossed paths with this goose and did a double-take. For some reason, despite flying to a different continent, I hadn't prepared myself for the differences in wildlife and nature.
            This is the egyptian goose that made me squat and observe in awe for a few minutes. What a cutie! There were so many other interesting looking birds.
          </p>
          <img src={britishDuck} alt="egyptian goose" />
          <p>
            After dropping my bags off at my hostel, I had about 8 hours until check-in. What I ended up doing was:
          </p>
          <ol>
            <li>Walk around Hyde Park</li>
            <li>Get trapped in a sea of tourists at Buckingham Palace</li>
            <li>Nap on a tour bus for 2-3 hours</li>
          </ol>
          <p>
            Honestly if you don't have a place to sleep, one of those non-stop tour buses that makes stops throughout the city can be a good option. Plus each time you wake up you'll see a new area of the city.
          </p>
          <img src={bus} alt="shops along a street in london" />
          <p>
            That night my hostel hosted an evening outing where I met some lovely people traveling from all over the globe! We played question games while drinking some ciders and then went upstairs to enjoy the live music afterwards. I was really surprised by the number of Bostonians there - throughout the night I met somewhere between 5-8 people from Boston/Greater Boston. It makes sense given how short the flight is to London!
          </p>
          <img src={newfriends} alt="group of happy people, with paige in the middle" />
          <br/>

          <h3>Museums & Choirs</h3>
          <p>The following day I was <em>exhausted</em>, but determined to make the most out of the day.</p>
          <p>I got some practice riding the Tube, and explored the British Museum and the Natural History Museum. One of the great things about the museums in London is that most of them are free! I would recommend going really early or visiting during an off-season, though - it gets really busy.</p>
          <img src={tube} alt="the tube" />
          <img src={museum} alt="picture of british museum" />
          <p>My favorite part of this entire trip was the 5 PM 'Evensong' Church Service at Westminster Abbey. I'm not religious, but this almost made me reconsider. Listening to the choir inside of the building was a really beautiful experience. I would go back to London just to experience it again. Plus, it's free.</p>
          <img src={abbey} alt="westminster abbey" />

          <br/>
          <h3>Hamilton</h3>
          <img src={englishbrek} alt="english breakfast" />
          <p>Started the day off with a proper english breakfast at a cafe near the hostel. Baked beans for breakfast is a pretty crazy idea. I'm still not sure how I feel about it. Last night would actually be my last night at the hostel, I was the only woman in my room and one of my roommates was just being way too much - so I booked a private room at a nearby hotel and I felt 1000% safer. The fact that I'm traveling alone in a foreign country, even in a city as safe as London, was becoming a reality for me and I had to always trust my spidey senses.</p>
          <p>I walked around Borough Market and really enjoyed seeing the American Candy shops that were everywhere. From the market I bought fresh fish & chips and strawberries, which were both good! The strawberries were juicy and fresh, they had a slightly different taste and were smaller than the strawberries in the US, and I found the English ones to be noticably better.</p>
          <img src={borough} alt="american candy store" />
          <p>
            I learned from one of the friends I'd made from the hostel that tickets for Hamilton are way cheaper than in the US, so I bought myself a ticket and saw the show for $70 USD. King George the 3rd actually has more lines in the English version of the play!
          </p>
          <img src={hamilton} alt="queen victoria theater" />

          <br/>
          <h1>York, England</h1>
          <h3>Lollies & Brollies</h3>
          <p>Hopped on the liner train going to York. Total trip was about 2 1/2 hours. The train was very nice and clean, especially compared to the MBTA.</p>
          <img src={liner} alt="liner train" />
          <p>I started feeling a bit sick shortly after arriving, but managed to see the York Minster and go on a chocolate tour where we made our own chocolate "lollies". During the tour I also learned that British slang for umbrella is "brolly".</p>
          <img src={yorkminster} alt="yorkminster" />
          <img src={lolli} alt="lollipop" />
          <p>Kit Kats, Smarties, etc. were actually invented in York! Guy Fawkes was raised here too.</p>

          <br/>
          <h3>Castles</h3>
          <p>Walked through "The Shambles", which is one of the world's best preserved medieval street. The floors of each out apparently jut out so medieval landlords could evade certain tax laws.</p>
          <img src={street} alt="the shambles" />
          <p>Toured Clifford's tower and learned a bit about York's darker side of history. Then retired back to my AirBnB to sleep out my cold.</p>
          <p>The entire city is encapsulated within medieval walls that were built during the 13th and 14th centuries. You can walk along the entirety of them. I learned York was originally founded by the Romans and then conquered by the Vikings.</p>

          <br/>
          <h1>Edinburgh, Scotland</h1>
          <h3>Haggis & Whiskey</h3>
          <img src={traintoedin} alt="view of english town" />
          <p>Took another 2 1/2 hour train up to Edinburgh and the views of the English towns and countryside were awesome. I appreciated all the differences from the US: the architecture, the trees, the general feel of the landscape and the people. In general people were very friendly and incredibly polite.</p>
          <p>The city itself had a really unique feel and was very touristy. The skyline is interesting to look at because everything is medieval but is actually pretty tall! Up until the 1700s Edinburgh was ecompassed in city walls, and so when the population boomed the only direction to could expand was up.</p>
          <img src={edin1} alt="walls in edinburgh" />
          <img src={edin2} alt="street in edinburgh" />
          <p>Scotland is the largest producer of whiskey globally so I had to do a whiskey tasting. I did the 'Whiskey & Folklore' tour by Little Fish Tours, 11/10 great time.</p>
          <p>I met an Australian girl who was also traveling by herself, and as you can tell by our glasses neither of us are big whiskey fans!</p>
          <img src={edin3} alt="table of whiskey glasses" />
          <p>Went to a pub to try Haggis Shepherd's pie tonight, which was actually pretty good! It tasted like ground beef really. </p>
          <p>Admittedly, at this point of the trip I was starting to become home-sick and missed sugary, processed and gluttonous American food. So I was eating Five Guys for the majority of dinners the last two-three days.</p>
          <p>Throughout all of the walking, getting sick, and missing meals from home, I was burning a ridiculous amount of calories each day and ended up losing 5 lbs by the end of the trip. But it was worth it.</p>

          <br/>
          <h1>Glasgow, Scotland</h1>
          <h3>Chinese Buffets</h3>
          <p>I heard through the grapevine that Glasgow has ridiculously good chinese buffets, so I took a train and tried the best reviewed chinese buffet I could find for lunch. It was a pretty standard so maybe I need to try more.</p>
          <img src={uni} alt="university of glasgow" />
          <img src={uni2} alt="university of glasgow building" />
          <p>Universtiy of Glasgow was straight out of Hogwarts. Seriously this college campus was so pretty and would probably cost 80k a year if it was in the US.</p>
          <p>I spent some time at the Kelvingrove Art Gallery and the Glasgow Cathedral. To end the day I hiked up Necropolis (Glasgow's cemetary) and took the subway back to the station.</p>
          <p>I found a <em>Krispy Kreme</em> at the station! I didn't even know they existed outside of the US. The store manager even gave me my drink for free and gave me an extra donut!</p>

          <br/>
          <p>This night was really horrible because, as I mentioned earlier, when I started this journey, local wildlife was not on the forefront of my mind. Imagine my surprise when I learn about <em>giant house spiders</em> after seeing one crawling around my room.</p>
          <p>This was the type of spider you see in photos online and think, "I'm glad I don't live near that." Except now I was completely alone and trapped in a room with it in a foreign country. This is quite literally the spider that inspired the giant spiders in Harry Potter - J.K Rowling wrote the books while in Edinburgh. I texted Saulo and friends for emotional support, burrowed in the shower the entire night and didn't get any sleep.</p>
  </div>
}