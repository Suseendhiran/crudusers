import React, { createContext, useContext, useState } from "react";

export const celebrityContext = createContext();

function CelebritiesProvider({ children }) {
  const [celebs, setCelebs] = useState([
    {
      id: "100",
      name: "Rajinikanth",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2021/07/1625107981_rajinikanth.jpg",
      about:
        "Rajinikanth was born as Shivaji Rao Gaekwad on 12 December 1950 in a Marathi family in Bangalore, Mysore State ",
      wikiUrl: "https://en.wikipedia.org/wiki/Rajinikanth",
    },
    {
      id: "101",
      name: "Robert Downey Jr.",
      imageUrl:
        "https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr.jpg",
      about:
        "Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career",
      wikiUrl: "https://en.wikipedia.org/wiki/Robert_Downey_Jr.",
    },
    {
      id: "102",
      name: "Tom Holland",
      imageUrl:
        "https://www.gannett-cdn.com/-mm-/cc053686530ce446f0a27dc352961fac33dd12ac/c=1144-81-2630-920/local/-/media/2017/06/26/USATODAY/USATODAY/636340759929048028-XXX-SPIDER-MAN-HOMECOMING-87249008.JPG",
      about:
        "Thomas Stanley Holland (born 1 June 1996)[1] is an English actor. A graduate of the BRIT School for Performing Arts and Technology in London, he began his acting career on London stage in the title role of Billy Elliot the Musical in the West End theatre from 2008 to 2010. ",
      wikiUrl: "https://en.wikipedia.org/wiki/Tom_Holland",
    },
    {
      id: "103",
      name: "Robert Downey Jr.",
      imageUrl:
        "https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr.jpg",
      about:
        "Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career",
      wikiUrl: "https://en.wikipedia.org/wiki/Robert_Downey_Jr.",
    },
    {
      id: "104",
      name: "Rajinikanth",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2021/07/1625107981_rajinikanth.jpg",
      about:
        "Rajinikanth was born as Shivaji Rao Gaekwad on 12 December 1950 in a Marathi family in Bangalore, Mysore State ",
      wikiUrl: "https://en.wikipedia.org/wiki/Rajinikanth",
    },
    {
      id: "105",
      name: "Robert Downey Jr.",
      imageUrl:
        "https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr.jpg",
      about:
        "Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career",
      wikiUrl: "https://en.wikipedia.org/wiki/Robert_Downey_Jr.",
    },
    {
      id: "106",
      name: "Tom Holland",
      imageUrl:
        "https://www.gannett-cdn.com/-mm-/cc053686530ce446f0a27dc352961fac33dd12ac/c=1144-81-2630-920/local/-/media/2017/06/26/USATODAY/USATODAY/636340759929048028-XXX-SPIDER-MAN-HOMECOMING-87249008.JPG",
      about:
        "Thomas Stanley Holland (born 1 June 1996)[1] is an English actor. A graduate of the BRIT School for Performing Arts and Technology in London, he began his acting career on London stage in the title role of Billy Elliot the Musical in the West End theatre from 2008 to 2010. ",
      wikiUrl: "https://en.wikipedia.org/wiki/Tom_Holland",
    },
    {
      id: "107",
      name: "Rajinikanth",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2021/07/1625107981_rajinikanth.jpg",
      about:
        "Rajinikanth was born as Shivaji Rao Gaekwad on 12 December 1950 in a Marathi family in Bangalore, Mysore State ",
      wikiUrl: "https://en.wikipedia.org/wiki/Rajinikanth",
    },
    {
      id: "108",
      name: "Robert Downey Jr.",
      imageUrl:
        "https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr.jpg",
      about:
        "Robert John Downey Jr. (born April 4, 1965)[1] is an American actor and producer. His career has been characterized by critical and popular success in his youth, followed by a period of substance abuse and legal troubles, before a resurgence of commercial success later in his career",
      wikiUrl: "https://en.wikipedia.org/wiki/Robert_Downey_Jr.",
    },
    {
      id: "109",
      name: "Tom Holland",
      imageUrl:
        "https://www.gannett-cdn.com/-mm-/cc053686530ce446f0a27dc352961fac33dd12ac/c=1144-81-2630-920/local/-/media/2017/06/26/USATODAY/USATODAY/636340759929048028-XXX-SPIDER-MAN-HOMECOMING-87249008.JPG",
      about:
        "Thomas Stanley Holland (born 1 June 1996)[1] is an English actor. A graduate of the BRIT School for Performing Arts and Technology in London, he began his acting career on London stage in the title role of Billy Elliot the Musical in the West End theatre from 2008 to 2010. ",
      wikiUrl: "https://en.wikipedia.org/wiki/Tom_Holland",
    },
  ]);

  return (
    <celebrityContext.Provider value={{ celebs, setCelebs }}>
      {children}
    </celebrityContext.Provider>
  );
}

export function useCelebrities() {
  return useContext(celebrityContext);
}

export default CelebritiesProvider;
