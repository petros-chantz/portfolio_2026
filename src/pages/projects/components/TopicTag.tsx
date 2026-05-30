type Props = {
  topic: string;
};

export function TopicTag({ topic }: Props) {
  return (
    <span className="rounded-[4px] bg-gray-50 px-2.5 py-1 text-[0.72rem] leading-none tracking-[0.04em] text-gray-700">
      {topic}
    </span>
  );
}

type ListProps = {
  topics: string[];
};

export function TopicTagList({ topics }: ListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {topics.map((topic) => (
        <TopicTag key={topic} topic={topic} />
      ))}
    </div>
  );
}
