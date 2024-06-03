import React from "react";

export default function LPIdentityCard(): React.JSX.Element {
  return <div className="flex gap-4">
    <img src="dummy-user-img-1.png" alt="" />
    <div>
        <p className="text-lg font-medium">Rishav Bhardwaz</p>
        <p className="text-sm font-medium text-WH-mild-gray">New Delhi</p>
    </div>
  </div>;
}
