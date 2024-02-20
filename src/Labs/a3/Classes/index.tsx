import './index.css'

function Classes() {
    const color = 'green';
    const color2 = 'black';

    return(
        <div>
            <h2>Classes</h2>
            <div className="wd-bg-yellow wd-fg-black wd-padding-10px">Yellow background</div>
            <div className="wd-bg-blue wd-fg-black wd-padding-10px">Blue background</div>
            <div className="wd-bg-red wd-fg-black wd-padding-10px">Red background</div>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>Dynamic Green background</div>
            <div className={`wd-bg-${color2} wd-fg-white wd-padding-10px`}>Dynamic Black background</div>
        </div>
    );
}

export default Classes;