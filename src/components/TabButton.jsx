export default function TabButton({children,onSelect}) {
    function handelClick() {}
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}
// props children poning to the content between our component tags 