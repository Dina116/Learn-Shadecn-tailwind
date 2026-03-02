type props = {
  title: string;
};
export default function MasPageHeader({ title }: props) {
  return (
    <>
      <div className=" text-right pe-12 ">
        <h6
          className="text-2xl text-black font-extrabold mt-1
           inline-block                          
           bg-gradient-to-r from-orange-600 to-orange-400  
           bg-no-repeat          
           bg-[length:100%_3px]  
           bg-bottom"
        >
          {title}
        </h6>
      </div>
    </>
  );
}
