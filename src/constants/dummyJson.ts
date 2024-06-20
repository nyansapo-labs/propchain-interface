import HomeImage from "../assets/images/home.png";

export interface AunctionDataProps {
  aunction: {
    image: string;
    listnumber: string;
    propdesc: {
      title: string;
      desc: string;
    };
  };
  bid: {
    bidM: {
      title: string;
      amount: string;
    };
    bidC: {
      title: string;
      amount: string;
    };
    myBid: string;
    closeDate: string;
    countDown: string;
  };
}

export const AunctionData: AunctionDataProps[] = [
  {
    aunction: {
      image:
        "https://media.istockphoto.com/id/490887930/photo/happy-mother-and-child-wearing-a-jeans-clothes-in-city.jpg?s=612x612&w=0&k=20&c=0WgUJtc9Pvca5q7oiLRiJnpUMklewbPJd-m5iA3EMJw=",
      listnumber: "1",
      propdesc: {
        title: "5 ACRES",
        desc: "At vero eos et accusamus et iusto.",
      },
    },
    bid: {
      bidM: {
        title: "Minimum Bid",
        amount: "GHc 10,000",
      },
      bidC: {
        title: "Current Bid",
        amount: "GHc 20,000",
      },
      myBid: "My Bid",
      closeDate: "02/09/2024",
      countDown: "22day(s) 0hr 4min 18sec",
    },
  },
  {
    aunction: {
      image:
        "https://media.istockphoto.com/id/490887930/photo/happy-mother-and-child-wearing-a-jeans-clothes-in-city.jpg?s=612x612&w=0&k=20&c=0WgUJtc9Pvca5q7oiLRiJnpUMklewbPJd-m5iA3EMJw=",
      listnumber: "1",
      propdesc: {
        title: "5 ACRES",
        desc: "At vero eos et accusamus et iusto",
      },
    },
    bid: {
      bidM: {
        title: "Minimum Bid",
        amount: "GHc 10,000",
      },
      bidC: {
        title: "Current Bid",
        amount: "GHc 20,000",
      },
      myBid: "My Bid",
      closeDate: "02/09/2024",
      countDown: "22day(s) 0hr 4min 18sec",
    },
  },
];
