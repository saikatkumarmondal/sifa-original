import React from "react";

const ApplicationProcess = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto bg-white border-[6px] border-black">
      <h1 className="text-center my-6 text-green-700 font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide">
        Application Process at Ningbo SIFA Elevator Co., Ltd.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-6 sm:px-10 pb-10">
        {/* Step 1 */}
        <div>
          <h2 className="text-black font-bold mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
            Submit Your Application
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Visit our Careers page to complete the online application form.
            Please include your updated resume and a brief cover letter
            outlining your interest and qualifications.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <h2 className="text-black font-bold mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
            Offer & Onboarding
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            If your profile matches our current needs, our HR team will contact
            you to schedule an initial interview. Depending on the role, further
            interviews or assessments may follow.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <h2 className="text-black font-bold mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">
            Interview & Evaluation
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Selected candidates will receive a formal job offer. Once accepted,
            you’ll begin our structured onboarding program to smoothly
            transition into the SIFA team and culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
