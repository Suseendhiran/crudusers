import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import UsersList from "./Components/UsersList";
import AddCelebs from "./Components/AddEditCelebs";

function Router() {
  const [celebs, setCelebs] = useState([
    {
      name: "Rajinikanth",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2021/07/1625107981_rajinikanth.jpg",
      about:
        "Rajinikanth was born as Shivaji Rao Gaekwad on 12 December 1950 in a Marathi family in Bangalore, Mysore State ",
      wikiUrl: "https://en.wikipedia.org/wiki/Rajinikanth",
    },
    {
      name: "Robert Downey Jr.",
      imageUrl:
        "https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr.jpg",
      about:
        "Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career",
      wikiUrl: "https://en.wikipedia.org/wiki/Robert_Downey_Jr.",
    },
    {
      name: "Tom Holland",
      imageUrl:
        "https://www.gannett-cdn.com/-mm-/cc053686530ce446f0a27dc352961fac33dd12ac/c=1144-81-2630-920/local/-/media/2017/06/26/USATODAY/USATODAY/636340759929048028-XXX-SPIDER-MAN-HOMECOMING-87249008.JPG",
      about:
        "Thomas Stanley Holland (born 1 June 1996)[1] is an English actor. A graduate of the BRIT School for Performing Arts and Technology in London, he began his acting career on London stage in the title role of Billy Elliot the Musical in the West End theatre from 2008 to 2010. ",
      wikiUrl: "https://en.wikipedia.org/wiki/Tom_Holland",
    },
    {
      name: "Robert Downey Jr.",
      imageUrl:
        "https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr.jpg",
      about:
        "Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career",
      wikiUrl: "https://en.wikipedia.org/wiki/Robert_Downey_Jr.",
    },
    {
      name: "Rajinikanth",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2021/07/1625107981_rajinikanth.jpg",
      about:
        "Rajinikanth was born as Shivaji Rao Gaekwad on 12 December 1950 in a Marathi family in Bangalore, Mysore State ",
      wikiUrl: "https://en.wikipedia.org/wiki/Rajinikanth",
    },
    {
      name: "Robert Downey Jr.",
      imageUrl:
        "https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr.jpg",
      about:
        "Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career",
      wikiUrl: "https://en.wikipedia.org/wiki/Robert_Downey_Jr.",
    },
    {
      name: "Tom Holland",
      imageUrl:
        "https://www.gannett-cdn.com/-mm-/cc053686530ce446f0a27dc352961fac33dd12ac/c=1144-81-2630-920/local/-/media/2017/06/26/USATODAY/USATODAY/636340759929048028-XXX-SPIDER-MAN-HOMECOMING-87249008.JPG",
      about:
        "Thomas Stanley Holland (born 1 June 1996)[1] is an English actor. A graduate of the BRIT School for Performing Arts and Technology in London, he began his acting career on London stage in the title role of Billy Elliot the Musical in the West End theatre from 2008 to 2010. ",
      wikiUrl: "https://en.wikipedia.org/wiki/Tom_Holland",
    },
    {
      name: "Rajinikanth",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2021/07/1625107981_rajinikanth.jpg",
      about:
        "Rajinikanth was born as Shivaji Rao Gaekwad on 12 December 1950 in a Marathi family in Bangalore, Mysore State ",
      wikiUrl: "https://en.wikipedia.org/wiki/Rajinikanth",
    },
    {
      name: "Robert Downey Jr.",
      imageUrl:
        "https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr.jpg",
      about:
        "Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career",
      wikiUrl: "https://en.wikipedia.org/wiki/Robert_Downey_Jr.",
    },
    {
      name: "Tom Holland",
      imageUrl:
        "https://www.gannett-cdn.com/-mm-/cc053686530ce446f0a27dc352961fac33dd12ac/c=1144-81-2630-920/local/-/media/2017/06/26/USATODAY/USATODAY/636340759929048028-XXX-SPIDER-MAN-HOMECOMING-87249008.JPG",
      about:
        "Thomas Stanley Holland (born 1 June 1996)[1] is an English actor. A graduate of the BRIT School for Performing Arts and Technology in London, he began his acting career on London stage in the title role of Billy Elliot the Musical in the West End theatre from 2008 to 2010. ",
      wikiUrl: "https://en.wikipedia.org/wiki/Tom_Holland",
    },
  ]);
  useEffect(() => {
    console.log("change", celebs);
  }, [celebs]);
  return (
    <Switch>
      <Route exact path="/">
        <UsersList celebs={celebs} setCelebs={setCelebs} />
      </Route>
      <Route path="/add-celeb">
        <AddCelebs celebs={celebs} setCelebs={setCelebs} />
      </Route>
      <Route path="/edit-celeb/:id">
        <AddCelebs celebs={celebs} setCelebs={setCelebs} />
      </Route>
    </Switch>
  );
}

export default Router;
