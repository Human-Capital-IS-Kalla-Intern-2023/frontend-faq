import React from 'react';
import { Link } from 'react-router-dom';
import { TruncateText } from '../../helpers/TruncateText';
import IconRenderer from '../../helpers/IconRenders';
import { TopicProps } from '../../state/types/TopicType';

interface HomeTopicCardProps {
  data: TopicProps[];
}

const HomeTopicCard: React.FC<HomeTopicCardProps> = ({ data }) => {
  const TOPIC_STORAGE_URL = import.meta.env.VITE_TOPIC_STORAGE_URL;

  return (
    <>
      <h2 className="w-full px-4 mt-6 lg:px-6 lg:pt-3 text-md lg:text-lg lg:mt-9">
        Topik Populer
      </h2>
      <div className="grid items-center justify-center w-full min-h-full grid-cols-2 gap-4 px-3 py-3 md:grid-cols-3 lg:grid-cols-4 md:gap-10 md:px-8 md:py-4 ">
        {data?.map((topic) => (
          <Link
            to={`/faq/question/${topic.slug}`}
            className="w-full"
            key={topic.slug}
          >
            <div className=" md:px-6 px-3 py-10 md:pt-6 pt-3 overflow-hidden rounded-lg shadow-lg w-70 md:h-72 w-42 h-36 bg-[#F0F2F5] hover:bg-[#E8EAED]">
              <div className="flex items-center justify-center p-1 md:p-3">
                {topic.image && (
                  <img
                    src={`${TOPIC_STORAGE_URL}/${topic.image}`}
                    alt={topic.name}
                    loading="eager"
                    className="w-10 h-10 md:w-20 md:h-20 "
                  />
                )}
                {!topic.image && topic.icon && (
                  <>
                    <IconRenderer
                      value={topic.icon}
                      className="w-10 h-10 md:w-20 md:h-20"
                    />
                  </>
                )}
              </div>
              <div className="flex flex-col items-start justify-center mt-3">
                <div className="pb-2 text-sm font-medium text-black break-all whitespace-normal lg:text-[17px]">
                  {topic.name}
                </div>
                <div className="overflow-hidden text-xs lg:text-[15px] text-gray md:block hidden">
                  {TruncateText(topic.description, 60)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomeTopicCard;
