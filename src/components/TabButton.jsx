export default function TabButton({children,onSelect,isSelected}) {
    function handelClick() {}
    return (
        <li>
            <button className={isSelected ? 'active': ''} onClick={onSelect}>{children}</button>
        </li>
    );
}
// props children poning to the content between our component tags 