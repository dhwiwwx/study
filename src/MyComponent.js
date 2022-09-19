import React from 'react'

const MyComponent = (props) => {
    return( 
    <div>제 이름은 {props.name}입니다
         제 이름은 {props.children}
    </div>
    
    )
};
MyComponent.defaultProps = {
name: '기모찌'  
};
export default MyComponent;
