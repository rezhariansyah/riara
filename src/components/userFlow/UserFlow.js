import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "./UserFlow.css";

export default function UserFlow() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div style={{ fontFamily: "orpheuspro, serif" }}>
              <div className="row justify-content-center">
                <div className="col-md-5 title-section">
                  <p className="subtitle-about">P R O J E C T</p>
                  <h1 className="title-about">PROCESS</h1>
                </div>
              </div>
            </div>
            <div style={{ fontFamily: "orpheuspro, serif" }}>
              <Timeline lineColor={"#17A2BF"}>
                <TimelineItem
                  key="001"
                  dateText="MEETING"
                  style={{ color: "#FFC107" }}
                >
                  <h5 className="flowuserTitle">CLIENT INPUT</h5>
                  <br />
                  <p>Proposal</p>
                  <p>Concept</p>
                  <p>Consult</p>
                </TimelineItem>
                <TimelineItem
                  key="001"
                  dateText="DEVELOPMENT"
                  style={{ color: "#FFC107" }}
                >
                  <h5 className="flowuserTitle">PLANNING & DESIGN</h5>
                  <br />
                  <p>Presentation</p>
                  <p>Design</p>
                  <p>Scheduling</p>
                </TimelineItem>
                <TimelineItem
                  key="001"
                  dateText="BUILD"
                  style={{ color: "#FFC107" }}
                >
                  <h5 className="flowuserTitle">CONSTRUCTION & MANAGEMENT</h5>
                  <br />
                  <p>Purchasing</p>
                  <p>Materials</p>
                  <p>Quality Check</p>
                </TimelineItem>
                <TimelineItem
                  key="001"
                  dateText="LAUNCHING"
                  style={{ color: "#FFC107" }}
                >
                  <h5 className="flowuserTitle">SAILING</h5>
                  <br />
                  <p>Ship Management</p>
                  <p>Branding</p>
                  <p>Maintenance</p>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
