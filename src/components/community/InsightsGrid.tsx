type Insight = {
    id: string | number;
    title: string;
    date: string;
    description: string;
  };
  
  const InsightsGrid = ({ insights }: { insights: Insight[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {insights.map((insight) => (
        <div
          key={insight.id}
          className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
        >
          <h3 className="text-base font-semibold mb-1">{insight.title}</h3>
          <p className="text-xs text-gray-500 mb-2">{insight.date}</p>
          <p className="text-sm text-gray-700">{insight.description}</p>
        </div>
      ))}
    </div>
  );
  
  export default InsightsGrid;
  