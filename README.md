# Exosuites🦿🤖🦾🚶🏻‍♀️👨🏽‍💻

**An open-source infrastructure for wearable robotics**

Epically Powerful is an open-source robotics infrastructure that streamlines the core framework of robotic systems — handling communication, timing, actuator monitoring, visualization, and data logging — so researchers can focus on controllers, experiments, and science.

Built for modularity, it unifies power systems, single-board computers, actuators, and IMUs into a cohesive plug-and-play setup.  Designed for modularity and speeding up the custom build process, it offers:
* Python-based coding interfaces for easy integration with commercial quasi direct drive (QDD) actuators and common IMU sensors
* Parts lists, compatibility guides, and tutorials for rapid hardware and software setup
* Example controllers and real-time visualization through PlotJuggler
* Extensive documentation on every step of the setup process

Epically Powerful lowers the barrier to building custom robotic systems without enforcing a pre-specified form factor, enabling researchers to go from raw hardware to modular, robust devices quickly and effectively.

---

### 🚀 Launchpad
* [Quickstart steps](https://neemkardharakesh.github.io/test/pages/tutorials.html)
* [Broader setup guide](https://neemkardharakesh.github.io/test/pages/setup.html)
* [API](https://neemkardharakesh.github.io/test/pages/api.html)
* [Example controllers](https://neemkardharakesh.github.io/test/pages/example_controllers.html)
* [Part picking guide](https://neemkardharakesh.github.io/test/pages/part_picker.html#partpicker)
* [Component sheet](https://docs.google.com/spreadsheets/d/1C3gL_t8qy4Z1Y0Z88K9UOk3GDusG5Bix34zb_12FyFI/edit?usp=sharing)
* [Video tutorial playlist](https://www.youtube.com/watch?v=TPDbrZND5xw&list=PLpoS8Arl9MxfbMvvfZNv9yS5zY06kI1Cy&pp=gAQB)

---

### 🤨 Why use it?

Epically Powerful was built by robotics researchers to make wearable robotics development faster, cleaner, and more reproducible.

* **Hardware-agnostic:** Works with multiple actuator and sensor brands — you’re not locked into any vendor or form factor.
* **Reproducible:** Shared configuration files, open schematics, and detailed setup docs make it easy to rebuild across labs or replicate prior builds.
* **Lower barrier to entry:** Verified hardware compatibility, handling of low level and backend code operation, and Python-based interface lowers the barrier for roboticists at all stages.
* **Built for iteration:** Swap hardware and test new controllers with minimal reconfiguration.
* **Open and vetted:** Maintained by a research community actively extending its capabilities across new hardware platforms and verified by multiple research groups.

In short, Epically Powerful turns “getting your robot up and running” from a multi-week endeavor into a single-day setup.

![software](https://raw.githubusercontent.com/gatech-epic-power/epically-powerful/refs/heads/main/docs/source/res/Software.png)
### 🛠️ Installation

You can install Epically Powerful via PyPI using pip by running:

`pip install epicallypowerful`

We recommend using our documentation website for guidance on identifying your hardware components, setting up and assembling your system, and verifying software functionality.

That’s it! You’re ready to build something *(ba dum tss)* epically powerful
### 📘 Documentation

Full documentation (including API, part picker, hardware setup, and usage examples) can be found in the [documentation website](https://neemkardharakesh.github.io/test/).

---

### ⚙️ Brief Overview of Supported and Tested Hardware

* **Actuators:** CubeMars AK series, RobStride series, CyberGear Micromotor
* **Single-board computers (SBCs):** NVIDIA Jetson Orin Nano and Raspberry Pi
* **IMUs:** MicroStrain (MSCL), MPU-9250 (I²C), and OpenIMU (CAN)
* **Power:** Li-Ion drill batteries and LiPo options

See the full **[Part Picker](https://neemkardharakesh.github.io/test/pages/part_picker.html)** and **[Setup](https://neemkardharakesh.github.io/test/pages/setup.html)** pages in the documentation for model-specific recommendations, wiring diagrams, and supporting components (e.g. CAN transceivers, fuses, safety pouches, etc.).

---

### 📝 Citation

If you use *Epically Powerful* in your research or publications, please cite:

JK Leestma, SR Nathella, CPO Nuesslein, S Mathur, GS Sawicki, and AJ Young, "Epically Powerful: An open-source software and mechatronics infrastructure for wearable robotic systems", *(in review at IEEE Access)*. DOI: https://doi.org/10.48550/arXiv.2511.05033

---

### 🧰 Contributing & Community

We welcome contributions from the robotics community! If you have improvements, extensions, or bug fixes, feel free to open a pull request or start a discussion under the “Issues” tab.  We also use GitHub Discussions as a space for conversation — a great spot for questions, implementation ideas, suggestions for new features, connecting with other users, or sharing projects built with Epically Powerful.

---

### 📄 License

This project is released under the [GPLv3 License](LICENSE).

---

### 👩🏼‍💻 Papers Powered by Epically Powerful

* JK Leestma, S Mathur, M Anderton, GS Sawicki, and AJ Young, [Dynamic duo: Design and validation of an autonomous frontal and sagittal actuating hip exoskeleton for step placement modulation during perturbed locomotion](https://doi.org/10.1109/LRA.2024.3371290), *Robotics and Automation Letters*, 2024.
* RTF Casey, CPO Nuesslein, F Davenport, J Wheeler, A Mazumdar, G Sawicki, and AJ Young [The Second Skin: A Wearable Sensor Suite that Enables Real-Time Human Biomechanics Tracking Through Deep Learning](https://doi.org/10.1109/TBME.2025.3589996), *IEEE Transactions on Biomedical Engineering*, 2025.




