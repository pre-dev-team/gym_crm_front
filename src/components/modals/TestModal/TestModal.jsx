import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import React, { useEffect, useState } from "react";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

function TestModal(props) {
    const items = [
        { title: "타이틀 1", index: 1 },
        { title: "타이틀 2", index: 2 },
        { title: "타이틀 3", index: 3 },
        { title: "타이틀 4", index: 4 },
        { title: "타이틀 5", index: 5 },
    ];

    const [pageList, setPageList] = useState([]);

    useEffect(() => {
        setPageList(items);
    }, []);

    const onDragEnd = (result) => {
        console.log(result);
        if (!result.destination) {
            return;
        }
        setPageList((items) => reorder(items, result.source.index, result.destination.index));
    };

    return (
        <>
            {pageList && (
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {pageList.map((item, index) => (
                                    <Draggable
                                        key={`item${item.index}`}
                                        draggableId={`item-${item.index}`}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <label>index: {index}</label>
                                                <br />
                                                <label>item.index: {item.index}</label>
                                                <br />
                                                <label>title: {item.title}</label>
                                                <input disabled type="text"></input>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            )}
        </>
    );
}

export default TestModal;
