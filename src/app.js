import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const prev = () => setActiveIndex(activeIndex - 1);

	const next = () => setActiveIndex(activeIndex + 1);

	const reset = () => setActiveIndex(0);

	const clickOnButton = (i) => setActiveIndex(i);
)
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((item, i) => (
							<li
								key={+item.id}
								className={
									activeIndex === i
										? styles['steps-item'] + ' ' + styles.active
										: styles['steps-item'] && activeIndex >= i
											? styles['steps-item'] + ' ' + styles.done
											: styles['steps-item']
								}>
								<button
									onClick={() => clickOnButton(i)}
									className={styles['steps-item-button']}>
									{+item.id}
								</button>
								{item.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={activeIndex === 0 ? true : false}
							onClick={prev}>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={activeIndex !== steps.length - 1 ? next : reset}>
							{activeIndex !== steps.length - 1
								? 'Далее'
								: 'Начать сначала'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
