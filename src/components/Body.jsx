import React from "react";
import "../App.css";
import RestCard from "./RestCard";
const Body = () => {
  const resreq = [
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "345272",
            name: "Yuvraj Restaurant",
            cloudinaryImageId: "7464bc855dd6f4218af173df10cc6d41",
            locality: "Guntur Road",
            areaName: "Venkateswara nagar",
            costForTwo: "₹250 for two",
            cuisines: [
              "Biryani",
              "North Indian",
              "Chinese",
              "Tandoor",
              "Kebabs",
            ],
            avgRating: 4.3,
            parentId: "228943",
            avgRatingString: "4.3",
            totalRatingsString: "1K+",
            promoted: true,
            adTrackingId:
              "cid=13706489~p=0~adgrpid=13706489#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=345272~eid=15c664e5-7687-400c-a7c0-2ff56d28b919~srvts=1716368181172~collid=83649",
            sla: {
              deliveryTime: 28,
              lastMileTravel: 2.1,
              serviceability: "SERVICEABLE",
              slaString: "25-30 mins",
              lastMileTravelString: "2.1 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-05-22 15:30:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textExtendedBadges: {},
                textBased: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "50% OFF",
              subHeader: "UPTO ₹100",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {},
          cta: {
            link: "swiggy://menu?restaurant_id=345272&source=collection&query=Biryani",
            text: "RESTAURANT_MENU",
            type: "DEEPLINK",
          },
          widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
        },
        relevance: {
          type: "RELEVANCE_TYPE_ON_MENU_RETURN",
          sectionId: "MENU_RETURN_FOOD",
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "491857",
            name: "V Grand Family Restaurant",
            cloudinaryImageId: "30a6aad17579e74bab7251f7ac89598f",
            locality: "Guntur Road",
            areaName: "Gopal Nagar",
            costForTwo: "₹300 for two",
            cuisines: ["Biryani", "Chinese", "North Indian", "South Indian"],
            avgRating: 4.2,
            parentId: "294990",
            avgRatingString: "4.2",
            totalRatingsString: "10K+",
            promoted: true,
            adTrackingId:
              "cid=13706511~p=2~adgrpid=13706511#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=491857~eid=ec47f077-4b1f-4b49-af7f-bf6e67f2b087~srvts=1716368181172~collid=83649",
            sla: {
              deliveryTime: 21,
              lastMileTravel: 2.1,
              serviceability: "SERVICEABLE",
              slaString: "20-25 mins",
              lastMileTravelString: "2.1 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-05-22 23:00:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                imageBased: {},
                textExtendedBadges: {},
                textBased: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹125 OFF",
              subHeader: "ABOVE ₹299",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {},
          cta: {
            link: "swiggy://menu?restaurant_id=491857&source=collection&query=Biryani",
            text: "RESTAURANT_MENU",
            type: "DEEPLINK",
          },
          widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
        },
        relevance: {
          type: "RELEVANCE_TYPE_ON_MENU_RETURN",
          sectionId: "MENU_RETURN_FOOD",
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "423480",
            name: "Prameela Aahar",
            cloudinaryImageId: "rvdwdfezjdmeqil018ar",
            locality: "Elephant tree",
            areaName: "Bandla Metla",
            costForTwo: "₹200 for two",
            cuisines: ["South Indian"],
            avgRating: 4.3,
            veg: true,
            parentId: "235655",
            avgRatingString: "4.3",
            totalRatingsString: "1K+",
            promoted: true,
            adTrackingId:
              "cid=13706499~p=3~adgrpid=13706499#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=423480~eid=cd46eae6-16b3-4c0e-94e8-1dda20daef60~srvts=1716368181172~collid=83649",
            sla: {
              deliveryTime: 20,
              lastMileTravel: 1.8,
              serviceability: "SERVICEABLE",
              slaString: "15-20 mins",
              lastMileTravelString: "1.8 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-05-22 16:00:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                textBased: {},
                imageBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "40% OFF",
              subHeader: "UPTO ₹80",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {},
          cta: {
            link: "swiggy://menu?restaurant_id=423480&source=collection&query=Biryani",
            text: "RESTAURANT_MENU",
            type: "DEEPLINK",
          },
          widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
        },
        relevance: {
          type: "RELEVANCE_TYPE_ON_MENU_RETURN",
          sectionId: "MENU_RETURN_FOOD",
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "485432",
            name: "Bilal Biryani",
            cloudinaryImageId:
              "FOOD_CATALOG/IMAGES/CMS/2024/3/13/9f12d330-09d9-45b4-a723-a4a11e1136b7_f68cdab1-7393-43c2-a5f3-b12a02e4b3d8.jpg_compressed",
            locality: "Janardhan Nagar",
            areaName: "Ram Nagar",
            costForTwo: "₹300 for two",
            cuisines: ["Biryani", "North Indian"],
            avgRating: 4.3,
            parentId: "45984",
            avgRatingString: "4.3",
            totalRatingsString: "100+",
            promoted: true,
            adTrackingId:
              "cid=13706507~p=4~adgrpid=13706507#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=485432~eid=1ecd0a47-9439-42d7-9ca2-6192636e67b1~srvts=1716368181172~collid=83649",
            sla: {
              deliveryTime: 24,
              lastMileTravel: 4.3,
              serviceability: "SERVICEABLE",
              slaString: "20-25 mins",
              lastMileTravelString: "4.3 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-05-22 23:00:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            aggregatedDiscountInfoV2: {},
            type: "F",
            badgesV2: {
              entityBadges: {
                textBased: {},
                imageBased: {},
                textExtendedBadges: {},
              },
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {},
          cta: {
            link: "swiggy://menu?restaurant_id=485432&source=collection&query=Biryani",
            text: "RESTAURANT_MENU",
            type: "DEEPLINK",
          },
          widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
        },
        relevance: {
          type: "RELEVANCE_TYPE_ON_MENU_RETURN",
          sectionId: "MENU_RETURN_FOOD",
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "804779",
            name: "Lasya Grand Restaurant",
            cloudinaryImageId:
              "FOOD_CATALOG/IMAGES/CMS/2024/4/3/cf8952db-d310-4eee-a72d-5f44e1598d55_4bfff6c3-b671-45ec-9d39-b5c418a5bab5.jpg",
            locality: "Sriram Colony",
            areaName: "Sujatha Nagar",
            costForTwo: "₹300 for two",
            cuisines: ["Biryani", "North Indian", "Chinese", "South Indian"],
            avgRating: 4.3,
            parentId: "480312",
            avgRatingString: "4.3",
            totalRatingsString: "100+",
            promoted: true,
            adTrackingId:
              "cid=13706540~p=5~adgrpid=13706540#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=804779~eid=30bf19b9-0f23-40b9-b63c-f6781444c726~srvts=1716368181172~collid=83649",
            sla: {
              deliveryTime: 20,
              lastMileTravel: 2.6,
              serviceability: "SERVICEABLE",
              slaString: "15-20 mins",
              lastMileTravelString: "2.6 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-05-22 22:00:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                textBased: {},
                imageBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "40% OFF",
              subHeader: "UPTO ₹80",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {},
          cta: {
            link: "swiggy://menu?restaurant_id=804779&source=collection&query=Biryani",
            text: "RESTAURANT_MENU",
            type: "DEEPLINK",
          },
          widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
        },
        relevance: {
          type: "RELEVANCE_TYPE_ON_MENU_RETURN",
          sectionId: "MENU_RETURN_FOOD",
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "183187",
            name: "Bismillah Hyderabad Dum Biryani",
            cloudinaryImageId: "h9eplozpsfntlq7ykeol",
            locality: "Mangamoor Road",
            areaName: "Mangamuru Road",
            costForTwo: "₹250 for two",
            cuisines: ["Biryani"],
            avgRating: 4,
            parentId: "47267",
            avgRatingString: "4.0",
            totalRatingsString: "1K+",
            sla: {
              deliveryTime: 20,
              lastMileTravel: 0.8,
              serviceability: "SERVICEABLE",
              slaString: "15-20 mins",
              lastMileTravelString: "0.8 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-05-22 22:30:00",
              opened: true,
            },
            badges: {},
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                textBased: {},
                imageBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "20% OFF",
              subHeader: "UPTO ₹50",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {},
          cta: {
            link: "swiggy://menu?restaurant_id=183187&source=collection&query=Biryani",
            text: "RESTAURANT_MENU",
            type: "DEEPLINK",
          },
          widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
        },
        relevance: {
          type: "RELEVANCE_TYPE_ON_MENU_RETURN",
          sectionId: "MENU_RETURN_FOOD",
        },
      },
    },
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          info: {
            id: "156111",
            name: "Hotel Paradise",
            cloudinaryImageId: "oritaqkkeaymldpu000j",
            locality: "Kurnool Road",
            areaName: "Venkateswara Nagar",
            costForTwo: "₹300 for two",
            cuisines: ["Biryani", "North Indian", "South Indian", "Chinese"],
            avgRating: 4.2,
            parentId: "100979",
            avgRatingString: "4.2",
            totalRatingsString: "10K+",
            sla: {
              deliveryTime: 16,
              lastMileTravel: 1.6,
              serviceability: "SERVICEABLE",
              slaString: "15-20 mins",
              lastMileTravelString: "1.6 km",
              iconType: "ICON_TYPE_EMPTY",
            },
            availability: {
              nextCloseTime: "2024-05-22 23:00:00",
              opened: true,
            },
            badges: {},
            select: true,
            isOpen: true,
            type: "F",
            badgesV2: {
              entityBadges: {
                textBased: {},
                imageBased: {},
                textExtendedBadges: {},
              },
            },
            aggregatedDiscountInfoV3: {
              header: "₹125 OFF",
              subHeader: "ABOVE ₹249",
              discountTag: "FLAT DEAL",
            },
            orderabilityCommunication: {
              title: {},
              subTitle: {},
              message: {},
              customIcon: {},
            },
            differentiatedUi: {
              displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {},
              },
            },
            reviewsSummary: {},
            displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            restaurantOfferPresentationInfo: {},
            externalRatings: {
              aggregatedRating: {
                rating: "--",
              },
            },
            ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          },
          analytics: {},
          cta: {
            link: "swiggy://menu?restaurant_id=156111&source=collection&query=Biryani",
            text: "RESTAURANT_MENU",
            type: "DEEPLINK",
          },
          widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
        },
        relevance: {
          type: "RELEVANCE_TYPE_ON_MENU_RETURN",
          sectionId: "MENU_RETURN_FOOD",
        },
      },
    },
  ];
  console.log(resreq[2]);
  console.log(resreq[1]);
  return (
    <>
      <input className="input_bar" type="text" placeholder="search resturent" />
      <button className="search_btn">Search</button>
      <div className="app">
        <RestCard resData={resreq[1]} />
        <RestCard resData={resreq[2]} />
        <RestCard resData={resreq[3]} />
        <RestCard resData={resreq[4]} />
        <RestCard resData={resreq[5]} />
        <RestCard resData={resreq[6]} />
        <RestCard resData={resreq[0]} />
        <RestCard resData={resreq[1]} />
        <RestCard resData={resreq[2]} />
        <RestCard resData={resreq[3]} />
        <RestCard resData={resreq[4]} />
        <RestCard resData={resreq[5]} />
        <RestCard resData={resreq[6]} />
        <RestCard resData={resreq[0]} />
      </div>
    </>
  );
};

export default Body;
