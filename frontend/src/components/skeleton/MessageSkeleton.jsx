import React from "react";
const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`chat ${idx % 2 === 0 ? "chat-start" : "chat-end"}`}
        >
          <div className="chat-image avatar">
            <div className="size-10 rounded-full">
              <div className="skeleton w-full h-full rounded-full animate-pulse" />
            </div>
          </div>

          <div>
            <div className="chat-header mb-1">
              <div className="skeleton h-4 w-16 animate-pulse" />
            </div>
            <div className="chat-bubble bg-transparent p-0">
              <div
                className="skeleton h-16 animate-pulse rounded-lg"
                style={{ width: `${150 + Math.random() * 100}px` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
