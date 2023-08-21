const LoadingComponent = () => {
  return (
    <section className="flex flex-row gap-4 justify-center items-center h-full">
      <img
        src="https://64.media.tumblr.com/tumblr_m0g2c5kJTE1rpzyboo1_500.gif"
        alt=""
        className="h-24"
      />
      <p className="font-pixel text-white text-[3rem] font-bold">Loading...</p>
    </section>
  );
};

export default LoadingComponent;
