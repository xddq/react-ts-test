import React from "react";

// props of our component.
interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

// const List = (props: IProps) => {
//   return <div>I am a list!</div>;
// };

// can also write React.FC which maps to this.
// desctructuring the people array from the IProps :]
const List: React.FunctionComponent<IProps> = ({ people }) => {
  // prints infos for a person in our people array
  // NOTE: always define what you want to return!
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List" key={person.url}>
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2> {person.name} </h2>
          </div>
          <p> {person.age} years old </p>
          <p className="List-note"> {person.note} </p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
