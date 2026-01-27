export default function HomeScreen() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[95%] max-w-[1400px] h-[98%] flex flex-col pe-5 justify-center items-center bg-[radial-gradient(circle,_#0086cf_0%,_#005a8e_100%)] ">
        <div className="text-center text-white">
          <h1
            className="text-2xl font-bold mb-2  
            inline-block                          
      bg-gradient-to-r from-orange-500 to-orange-400  
      bg-no-repeat          
      bg-[length:100%_3px]  
      bg-bottom"
          >
            (MAS)ماس
          </h1>
          <p className="text-sm font-bold">منظومة إدارة القراء والمحصلين</p>
        </div>
      </div>
    </div>
  );
}
