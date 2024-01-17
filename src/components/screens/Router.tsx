import { BrowserRouter, Routes, Route } from "react-router-dom";

export enum RoutesList {
  Pavsgram = "/Pavsgram",
  Marketplace = "/Marketplace",
  Shop = "/Shop",
  Groups = "/Groups",
  Nursery = "/Nursery",
  Statistics = "/Statistics",
  Promotions = "/Promotions",
  Delivery = "/Delivery",
  Events = "/Events",
  Reviews = "/Reviews",
  Default = "*",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path={RoutesList.Nursery} element={<></>}></Route>
          {/* <Route path={RoutesList.Pavsgram} element={}></Route>
          <Route path={RoutesList.Marketplace} element={}></Route>
          <Route path={RoutesList.Shop} element={}></Route>
          <Route path={RoutesList.Groups} element={}></Route>
          <Route path={RoutesList.Statistics} element={}></Route>

          <Route path={RoutesList.Promotions} element={}></Route>
          <Route path={RoutesList.Delivery} element={}></Route>
          <Route path={RoutesList.Events} element={}></Route>
          <Route path={RoutesList.Reviews} element={}></Route>
          <Route path={RoutesList.Default} element={}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
