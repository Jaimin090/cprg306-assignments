import MyInfo from '../week-2/student-info';
import NewItem from './new-item';

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-animated p-8">
        
        {/* Title */}
       
        {/* Main Content */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-md w-full mb-20">
            <NewItem />
        </div>

        {/* Footer */}
            <div className=" absolute bottom-0 left-0 w-full  "><MyInfo/></div>
       
    </div>
  );
}
