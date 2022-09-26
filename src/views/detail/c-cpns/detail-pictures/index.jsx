import PictureBrowser from "@/base-ui/picture-browser";
import React, { memo, useCallback, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { PicturesWrapper } from "./style";

const DetailPictures = memo((props) => {
  const { detailInfo } = useSelector(
    (state) => ({
      detailInfo: state.detail.detailInfo,
    }),
    shallowEqual
  );

  const [showBrow, setShowBrow] = useState(false);

  const handleShowBtn = useCallback((isShow) => {
    setShowBrow(isShow);
  }, []);

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={(e) => setShowBrow(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                key={item}
                onClick={(e) => setShowBrow(true)}
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="show-btn" onClick={(e) => setShowBrow(true)}>
        显示照片
      </div>
      {showBrow && (
        <PictureBrowser
          pictureUrls={detailInfo.picture_urls}
          closeClick={(isShow) => handleShowBtn(isShow)}
        />
      )}
    </PicturesWrapper>
  );
});

export default DetailPictures;
