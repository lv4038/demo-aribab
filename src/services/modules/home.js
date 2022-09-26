import hyRequest from "..";

// 高性价比房源数据
export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice",
  });
}

// 高评分房源数据
export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore",
  });
}

// 房间折扣数据
export function getHomeDiscountData() {
  return hyRequest.get({
    url: "/home/discount",
  });
}

// 热门推荐数据
export function getHomeHotRecommendData() {
  return hyRequest.get({
    url: "/home/hotrecommenddest",
  });
}
// 更多出行数据
export function getHomeLongforData() {
  return hyRequest.get({
    url: "/home/longfor",
  });
}

// 房间 plus数据
export function getHomePlusData() {
  return hyRequest.get({
    url: "/home/plus",
  });
}
