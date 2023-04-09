import { TBulletinItem } from "types/api";
type TBulletinList = TBulletinItem[];

const Bulletin = ({ bulletinList = [] }: { bulletinList: TBulletinList }) => {
  return (
    <div style={{ height: "600px", overflowY: "scroll" }}>
      <h2 className="lh-1">最新消息</h2>
      <div className="w-100 border-bottom mt-3 mb-3"></div>
      <ul>
        {bulletinList ? (
          bulletinList.map((item, key) => {
            return (
              <li key={key}>
                <p className="text-body mb-3">{item.post_time}</p>
                <h4 className="mb-3">{item.title}</h4>
                <p className="text-body mb-3">{item.content}</p>
                <div className="w-100 border-bottom mt-3 mb-3"></div>
              </li>
            );
          })
        ) : (
          <li>
            <div className="text-subheading font-weight-normal">-暫無資料-</div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Bulletin;
