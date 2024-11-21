const ZoologyEducationalDescription = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800">
            Introduction to Zoology
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Zoology is the scientific study of animals, covering their
            structure, physiology, classification, and distribution. In this
            section, we explore some fundamental topics in the fascinating world
            of animals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Block 1 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl mb-6">
              🦁
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Animal Classification
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Learn about the diverse and complex classification system of
              animals, from invertebrates to vertebrates, and the role of
              taxonomy in understanding biodiversity.
            </p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl mb-6">
              🧬
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Animal Genetics
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Discover the principles of genetics, inheritance, and evolution,
              and how they shape the traits of animals. Learn about genetic
              variation and its importance in survival.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white text-3xl mb-6">
              🌍
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Animal Behavior
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Study the behaviors of animals, from instinctual actions to
              learned behaviors. Explore the role of behavior in animal survival
              and reproduction.
            </p>
          </div>
        </div>

        {/* Detailed Section */}
        <div className="mt-16 space-y-6">
          <h3 className="text-3xl font-semibold text-gray-800">
            Exploring the Animal Kingdom
          </h3>
          <p className="text-lg text-gray-600">
            The animal kingdom is vast and diverse. In this section, we dive
            deeper into key subjects that every Zoology student should
            understand as they begin their journey in the field.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div>
              <h4 className="text-2xl font-semibold text-gray-800">
                Evolution of Species
              </h4>
              <p className="mt-4 text-base text-gray-600">
                Understand the theory of evolution by natural selection and how
                animals adapt to their environments over generations.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold text-gray-800">
                Anatomy and Physiology
              </h4>
              <p className="mt-4 text-base text-gray-600">
                Explore the internal systems of animals, from their skeletal and
                muscular structures to their circulatory, respiratory, and
                nervous systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoologyEducationalDescription;
