import styles from '../styles/ComponentFilterList.module.css';
import demos from '../amp-demos/index.js';

const allAmpComponents = [];
for (const demo of Object.values(demos)) {
  for (const componentName of demo.componentsUsed) {
    if (allAmpComponents.indexOf(componentName) === -1) {
      allAmpComponents.push(componentName);
    }
  }
}
allAmpComponents.sort();

export default function ComponentFilterBar({ filteredComponents, router }) {
    function toggleFilter(componentName) {
      let componentList = [...filteredComponents];
      const index = componentList.indexOf(componentName);
      if (index > -1) {
        componentList.splice(index, 1);
      } else {
        componentList.push(componentName)
      }
      componentList.sort();
      router.push({
        pathname: '/',
        query: {
          ...router.query,
          components: componentList,
        },
      }, undefined, { shallow: true });
    }
  
    function clearFilters() {
      router.push({
        pathname: '/',
        query: {
          ...router.query,
          components: [],
        },
      }, undefined, { shallow: true });
    }

    function isFilterActive(componentName) {
        return filteredComponents.indexOf(componentName) !== -1;
    }
  
    return <div>
        <p>{allAmpComponents.map(componentName => <button key={componentName} className={isFilterActive(componentName) ? styles.active : null} onClick={toggleFilter.bind(this, componentName)}>{componentName}</button>)}</p>
        <button onClick={clearFilters}>Clear Filters</button>
      </div>;
  }