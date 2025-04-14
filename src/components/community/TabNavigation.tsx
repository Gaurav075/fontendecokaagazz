type Props = {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
  };
  
  const TabNavigation = ({ tabs, activeTab, onTabChange }: Props) => (
    <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-6 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-2 text-sm font-medium border-b-2 transition duration-300 ${
            activeTab === tab
              ? "border-black text-black"
              : "border-transparent text-gray-500 hover:text-black"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
  
  export default TabNavigation;
  