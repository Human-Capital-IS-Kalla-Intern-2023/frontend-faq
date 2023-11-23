import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
// import { faMusic } from '../../assets/icons/categoriIcon';

interface FilterOption {
  id: string;
  label: string;
}

interface InputField {
  id: string;
  label: string;
  name: string;
  type?: string;
}
interface QuestionCardProps {
  addButtonText: string;
  title: string;
  filterOptions: FilterOption[];
  inputFields: InputField[];
  onSubmit?: any;
  onSearch?: any;
  onNavigate?: any;
  data?: any[];
}

const QuestionCard: React.FC<QuestionCardProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="py-2 antialiased sm:py-2 overlay">
      <div className="w-full">
        <div className="relative bg-white shadow-lg">
          <div className="w-full overflow-x-auto">
            <div className="items-start content-start justify-start bg-white">
              <div className="grid mx-auto mt-2 divide-y divide-neutral-200">
                <div className="px-6 pb-4">
                  <div className="py-5 border-b  border-slate-300">
                    <details className="group">
                      <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                        <span> What is a SAAS platform?</span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                        SAAS platform is a cloud-based software service that
                        allows users to access and use a variety of tools and
                        functionality.
                      </p>
                      <div className="flex justify-end">
                        <button className="px-2 py-1 mt-3 text-white rounded bg-primary group-open:animate-fadeIn">
                          Lihat Penuh
                        </button>
                      </div>
                    </details>
                  </div>
                  <div className="py-5 border-b border-slate-300">
                    <details className="group">
                      <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                        <span> How does billing work?</span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                        We offers a variety of billing options, including
                        monthly and annual subscription plans, as well as
                        pay-as-you-go pricing for certain services. Payment is
                        typically made through a credit card or other secure
                        online payment method.
                      </p>
                    </details>
                  </div>
                  <div className="py-5 border-b border-slate-300">
                    <details className="group">
                      <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                        <span> Can I get a refund for my subscription?</span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                        We offers a 30-day money-back guarantee for most of its
                        subscription plans. If you are not satisfied with your
                        subscription within the first 30 days, you can request a
                        full refund. Refunds for subscriptions that have been
                        active for longer than 30 days may be considered on a
                        case-by-case basis.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionCard;
