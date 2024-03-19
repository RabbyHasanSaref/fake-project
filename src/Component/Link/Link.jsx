import PropTypes from 'prop-types';
const Link = ({route}) => {
    const {path, name} = route;
    return (
        <li className="mr-5 text-xl font-semibold">
            <a href={path}>{name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object,
}

export default Link;