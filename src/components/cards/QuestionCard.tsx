import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { DropdownIcon, CloseButtonIcon } from '../../assets/icons/Icon';
import { TopicProps } from '../../state/types/TopicType';
import { faqLike, faqDislike } from '../../api/user/FaqUserAPI';
import HeaderFaq from '../headers/HeaderFaq';
import ThanksFeedbackCard from './ThanksFeedbackCard';
import FeedbackButtons from '../buttons/FeedbackButtons';
interface QuestionCardProps {
  data?: TopicProps;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ data }) => {
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<number[]>([]);
  const [feedbackGiven, setFeedbackGiven] = useState<string[]>([]);
  const [closedQuestions, setClosedQuestions] = useState<string[]>([]);

  const handleClick = (questionId: number) => {
    setSelectedQuestionIds((prevIds) => {
      if (prevIds.includes(questionId)) {
        return prevIds.filter((id) => id !== questionId);
      } else {
        return [...prevIds, questionId];
      }
    });
  };

  const handleCloseButtonClick = (questionSlug: string) => {
    setClosedQuestions((prevClosedQuestions) => [
      ...prevClosedQuestions,
      questionSlug,
    ]);
  };

  const handlerLike = async (TopicSlug: any, QuestionSlug: any) => {
    try {
      const responseData = await faqLike(TopicSlug, QuestionSlug);
      if (responseData) {
        setFeedbackGiven((prevFeedback) => [...prevFeedback, QuestionSlug]);

        setTimeout(() => {
          handleCloseButtonClick(QuestionSlug);
        }, 2500);
      }
    } catch (error: any) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDislike = async (TopicSlug: any, QuestionSlug: any) => {
    try {
      const responseData = await faqDislike(TopicSlug, QuestionSlug);
      if (responseData) {
        setFeedbackGiven((prevFeedback) => [...prevFeedback, QuestionSlug]);

        setTimeout(() => {
          handleCloseButtonClick(QuestionSlug);
        }, 2500);
      }
    } catch (error: any) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="antialiased overlay">
      <HeaderFaq />
      <div className="w-full lg:w-[95%] pt-6 lg:pt-10 lg:pl-16 min-h-[101vh]">
        <div className="items-start content-start justify-start ">
          <div className="grid mx-auto ">
            <div className="px-5 lg:px-7">
              <h1 className="text-xl mx-2 font-bold pb-3  border-b border-[#d1d5db] ">
                {data?.name}
              </h1>
              <p className="mx-2 mt-3 mb-8 text-[15px]">{data?.description}</p>
              {data?.questions.map((question) => (
                <div
                  key={question.id}
                  className={`py-2 shadow-[0_1px_0px_0px_rgba(0,0,0,0.1)] bg-transparent`}
                >
                  <details className="group ">
                    <summary
                      className={`flex items-center justify-between  hover:bg-[#E4E6E9] px-2 font-medium list-none cursor-pointer py-3 rounded-md ${
                        selectedQuestionIds.includes(question.id)
                          ? 'bg-slate-200 '
                          : ''
                      }`}
                      onClick={() => handleClick(question.id)}
                    >
                      <span className="text-base">{question.question}</span>
                      <span className="transition group-open:rotate-180">
                        <DropdownIcon />
                      </span>
                    </summary>
                    <div className="">
                      <ReactQuill
                        theme="snow"
                        readOnly={true}
                        value={question.answer}
                        modules={{ toolbar: false }}
                        className=""
                        style={{ fontSize: '14px', border: 'none' }}
                      />
                    </div>

                    <div className="py-3">
                      <div className="sm:flex block  justify-between rounded-md bg-[#F0F2F5] pt-2 py-2 md:space-x-0 space-x-2 px-3 mr-1">
                        <div
                          className={`flex py-4  px-3 rounded-md ${
                            closedQuestions.includes(question.slug)
                              ? 'bg-transparent '
                              : 'bg-white shadow-lg'
                          }`}
                        >
                          {closedQuestions.includes(question.slug) ? null : (
                            <div className="w-full md:w-fit">
                              {feedbackGiven.includes(question.slug) ? (
                                <ThanksFeedbackCard
                                  handleCloseButtonClick={
                                    handleCloseButtonClick
                                  }
                                />
                              ) : (
                                <div className="flex items-center justify-between pb-3 text-center md:justify-center">
                                  <div className="pl-1 pr-2 text-sm">
                                    Apakah Ini Membantu?
                                  </div>
                                  <button
                                    className="flex pl-4 "
                                    onClick={() =>
                                      handleCloseButtonClick(question.slug)
                                    }
                                  >
                                    <CloseButtonIcon className="w-8 h-[18px] hover:bg-slate-200 hover:text-red-600 rounded-full cursor-pointer" />
                                  </button>
                                </div>
                              )}
                              {!feedbackGiven.includes(question.slug) && (
                                <FeedbackButtons
                                  onLikeClick={() =>
                                    handlerLike(data?.slug, question?.slug)
                                  }
                                  onDislikeClick={() =>
                                    handleDislike(data?.slug, question?.slug)
                                  }
                                />
                              )}
                            </div>
                          )}
                        </div>
                        <Link
                          to={`/faq/question/${data.slug}/${question.slug}`}
                          className="flex items-end justify-center pb-1"
                        >
                          <div className="hover:bg-gray items-center text-center duration-200 md:py-[7px] md:w-auto w-full py-2 mt-3 text-white md:rounded-full rounded-2xl px-3 bg-primary group-open:animate-fadeIn md:text-[15px] text-sm">
                            Lihat Penuh
                          </div>
                        </Link>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionCard;
