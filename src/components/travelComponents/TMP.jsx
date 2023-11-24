import garden from '../../images/tmp/garden.png';
import croc from '../../images/tmp/croc.png';
import friedgator from '../../images/tmp/friedgator.png';
import mexican from '../../images/tmp/mexican.png';
import ocean from '../../images/tmp/ocean.jpeg';
import saulo from '../../images/tmp/saulo.jpeg';
import turtles from '../../images/tmp/turtles.png';
import manatees from '../../images/tmp/manatees.gif';

export default function TMP() {
  return <div className="trip">
          <h1>Tampa</h1>
          <h3>May 6 - May 10</h3>
          
          <p>Saulo and I flew down to Florida and spent most of our time around Largo, which is right outside of Tampa. We started the trip off with some brazilian buffet since
            Saulo's friend happened to be in Tampa & was celebrating his birthday, which was very fun.
          </p>
          <p>Our AirBnB was about a 15-20 minute walk from Indian Rocks Beach and close to a few free nature preserves. We spent some time walking around Largo's free botanical gardens, and spotted this little 'gator just chilling by himself.</p>
          <img src={croc} alt="alligator floating in pond" />
          <img src={garden} alt="botanical garden" />
          <p>We spent the majority of our beach time at Indian Rocks, and the water was really clear and warm. Saulo invested in an underwater camera & some snorkles for us which was an amazing idea. There were these little striped fish that would follow your feet around everywhere you go, because they would feed off of the little things you kicked up as you moved.</p>
          <p>There was a wild family of manatees that showed up at Indian Rocks! This was my first time ever seeing a manatee. Apparently it was mating season for them.</p>
          <img src={manatees} alt="school of manatees" />
          <p>Lunch was fried gator and oysters. Fried alligator tasted pretty similar to popcorn chicken, except slightly chewier.</p>
          <img src={friedgator} alt="fried alligator on a plate" />
          <img src={mexican} alt="mexican food" />
          <p>I was dying to be reunited with Waffle House, and Saulo got to try it for the first time! One chocolate chip waffle + a side of bacon and some orange juice is the ultimate Waffle House meal. Unfortunately we didn't witness any fights but we got some amazing recommendations from our waitress. We learned about George McGough Turtle Park, which was right across from our AirBnB and was a total turtle haven. We even ended up rescuing a little dehydrated turtle and bringing it to the park.</p>
          <img src={turtles} alt="turtles sitting on a log" />
          <img src={ocean} alt="view of ocean" />
          <img src={saulo} alt="saulo smiling on dock" />

    </div>
}