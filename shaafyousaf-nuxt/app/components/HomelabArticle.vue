<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <Motion
    class="article-container"
    :initial="{ opacity: 0, y: 30 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, delay: 0.2 }"
  >
    <article class="homelab-article">
      <!-- Introduction -->
      <section class="article-section">
        <h2 class="section-title">Introduction</h2>
        <p class="article-text">
          Welcome to my homelab! This is where I experiment, learn, and build various infrastructure projects. 
          Running on Ubuntu Server, this system serves as a multi-purpose platform that handles everything from 
          media streaming to VPN access, web hosting, and development environments. This article will walk you 
          through my complete setup, the services running, and the security measures in place.
        </p>
      </section>

      <!-- Hardware & Network Infrastructure -->
      <section class="article-section">
        <h2 class="section-title">Hardware & Network Infrastructure</h2>
        <p class="article-text">
          The server runs on a Dell Inspiron 5584 with an Intel Core i7-8565U processor, 16GB DDR4 RAM, and a 
          240GB SSD. For reliability, the system is connected through dual ethernet ports—a primary gigabit 
          connection and a backup 300Mbps connection to ensure uptime even if the primary connection fails 
          due to errors or network issues.
        </p>
        <div class="image-placeholder">
          <Icon name="heroicons:photo-20-solid" />
          <span>Hardware Setup Image</span>
        </div>
        <p class="article-text">
          The network infrastructure is built around a NIGHTHAWK router with 4Gbps uplink and downlink 
          capabilities, providing ample bandwidth to support all the traffic crossing through the system. 
          This high-performance router ensures that multiple services can run simultaneously without 
          bottlenecks.
        </p>
        <div class="image-placeholder">
          <Icon name="heroicons:squares-2x2-20-solid" />
          <span>Network Topology Diagram</span>
        </div>
      </section>

      <!-- Core Services -->
      <section class="article-section">
        <h2 class="section-title">Core Services & Infrastructure</h2>
        
        <div class="service-subsection">
          <h3 class="service-title">
            <Icon name="heroicons:server-20-solid" />
            Ubuntu Server Foundation
          </h3>
          <p class="article-text">
            The entire system runs on Ubuntu Server, providing a stable and secure Linux environment. This 
            choice offers excellent package management, strong community support, and robust performance for 
            server workloads.
          </p>
        </div>

        <div class="service-subsection">
          <h3 class="service-title">
            <Icon name="heroicons:cube-20-solid" />
            Docker & Containerization
          </h3>
          <p class="article-text">
            Docker serves as the containerization platform, allowing me to run isolated services with ease. 
            Currently running a Minecraft server in a Docker container, this setup provides portability, 
            easy updates, and consistent environments across deployments. Docker Compose files are stored 
            on the network drive for version control and easy management.
          </p>
        </div>

        <div class="service-subsection">
          <h3 class="service-title">
            <Icon name="heroicons:shield-check-20-solid" />
            WireGuard VPN with DuckDNS
          </h3>
          <p class="article-text">
            WireGuard, paired with DuckDNS dynamic DNS, enables this computer to host its own VPN that I can 
            connect to from anywhere in the world. This provides secure access to my home network remotely, 
            allowing me to manage the server, access files, and utilize local services as if I were physically 
            at home. The VPN uses modern cryptography and is significantly faster than traditional VPN protocols.
          </p>
          <div class="image-placeholder">
            <Icon name="heroicons:arrows-right-left-20-solid" />
            <span>VPN Connection Flow Diagram</span>
          </div>
        </div>

        <div class="service-subsection">
          <h3 class="service-title">
            <Icon name="heroicons:folder-open-20-solid" />
            Samba Network Drive
          </h3>
          <p class="article-text">
            Samba provides a shared file directory accessible from Windows machines, creating a seamless 
            network drive experience. This centralized storage houses media files, Docker Compose configurations, 
            website builds, code repositories, and other important data. It's the backbone of my file management 
            system, making files accessible across all devices on the network.
          </p>
        </div>
      </section>

      <!-- Web Hosting & Security -->
      <section class="article-section">
        <h2 class="section-title">Web Hosting & Security Architecture</h2>
        
        <div class="service-subsection">
          <h3 class="service-title">
            <Icon name="heroicons:cloud-20-solid" />
            Cloudflare Zero Trust Tunnel & Nginx
          </h3>
          <p class="article-text">
            One of the most crucial aspects of my setup is the web hosting infrastructure. By running a Cloudflare 
            Zero Trust tunnel alongside an Nginx reverse proxy, I can host websites and expose them publicly to 
            the internet without port forwarding. This architecture provides multiple security benefits:
          </p>
          <ul class="article-list">
            <li>The server's real IP address remains hidden from attackers</li>
            <li>DDoS protection is handled by Cloudflare's network</li>
            <li>No open ports on the router for web traffic, preventing direct attacks</li>
            <li>SSL/TLS encryption is managed automatically</li>
            <li>Protection against common web attacks (SQL injection, XSS, etc.)</li>
          </ul>
          <p class="article-text">
            This setup allows me to host multiple websites and services securely, with Nginx handling the 
            routing and Cloudflare managing the public-facing security layer. It's a production-grade 
            solution that keeps my home network safe from malicious actors while still providing public access 
            to hosted services.
          </p>
          <div class="image-placeholder">
            <Icon name="heroicons:arrow-path-20-solid" />
            <span>Cloudflare Tunnel & Nginx Architecture Flowchart</span>
          </div>
        </div>

        <div class="service-subsection">
          <h3 class="service-title">
            <Icon name="heroicons:puzzle-piece-20-solid" />
            Minecraft Server
          </h3>
          <p class="article-text">
            A Minecraft server runs in a Docker container with its port forwarded to allow friends to connect 
            directly without needing VPN access. While this means the server is publicly exposed, it's a 
            calculated trade-off for accessibility. The Minecraft server protocol itself handles authentication, 
            and UFW firewall rules ensure only the necessary port is accessible.
          </p>
        </div>
      </section>

      <!-- Firewall & Security -->
      <section class="article-section">
        <h2 class="section-title">Firewall & Security Measures</h2>
        
        <div class="service-subsection">
          <h3 class="service-title">
            <Icon name="heroicons:shield-exclamation-20-solid" />
            Uncomplicated Firewall (UFW)
          </h3>
          <p class="article-text">
            Security is paramount when running a home server, especially one with public-facing services. 
            UFW (Uncomplicated Firewall) is configured to manage which ports are allowed and control network 
            traffic. This is a precautionary measure to prevent attacks or malicious code from spreading 
            throughout my home network. Only essential ports are open, and all other traffic is blocked by 
            default, following the principle of least privilege.
          </p>
          <p class="article-text">
            The firewall configuration ensures that even if one service is compromised, attackers cannot 
            easily pivot to other devices on the network or access sensitive services.
          </p>
        </div>
      </section>

      <!-- Media & Monitoring -->
      <section class="article-section">
        <h2 class="section-title">Media & Monitoring Services</h2>
        
        <div class="service-subsection">
          <h3 class="service-title">
            <Icon name="heroicons:film-20-solid" />
            Plex Media Server
          </h3>
          <p class="article-text">
            Plex Media Server handles all my media needs, providing a Netflix-like interface for movies, TV 
            shows, and music stored on the Samba network drive. Plex automatically organizes content, downloads 
            metadata, and streams to any device on the network or remotely through the internet.
          </p>
        </div>

        <div class="service-subsection">
          <h3 class="service-title">
            <Icon name="heroicons:chart-bar-20-solid" />
            Glances Monitoring
          </h3>
          <p class="article-text">
            Glances provides real-time system monitoring accessible through a web interface on the local network. 
            It tracks CPU usage, memory consumption, disk I/O, network traffic, and running processes. More 
            importantly, Glances exposes a RESTful API that my ASP.NET Core Web API project fetches data from, 
            which this frontend client then displays to show live server statistics.
          </p>
          <div class="image-placeholder">
            <Icon name="heroicons:computer-desktop-20-solid" />
            <span>Monitoring Dashboard Screenshot</span>
          </div>
        </div>
      </section>

      <!-- Additional Services -->
      <section class="article-section">
        <h2 class="section-title">Additional Local Services</h2>
        <p class="article-text">
          Beyond the major services mentioned above, I'm running multiple websites and tools on the local 
          network for various tasks and projects. These include development environments, testing platforms, 
          personal projects, and utility services that make daily workflows more efficient.
        </p>
      </section>

      <!-- Future Plans -->
      <section class="article-section">
        <h2 class="section-title">Future Expansion Plans</h2>
        <p class="article-text">
          There's still much to explore and implement in this homelab environment:
        </p>
        <ul class="article-list">
          <li>
            <strong>Kubernetes Deployment:</strong> Setting up a Kubernetes cluster for container orchestration 
            and learning production-grade deployment practices
          </li>
          <li>
            <strong>SQL Database Server:</strong> Running a dedicated database server for various applications 
            and projects
          </li>
          <li>
            <strong>Second Server Integration:</strong> I have a second server (not yet operational as of 
            February 13, 2026) that I plan to bring online for redundancy and expansion
          </li>
          <li>
            <strong>Database Backup System:</strong> Implementing automated backups from the primary server 
            to the secondary server for data safety
          </li>
          <li>
            <strong>Load Balancing:</strong> Setting up proper load balancing across both servers to distribute 
            traffic and improve reliability
          </li>
          <li>
            <strong>Multi-Server Kubernetes:</strong> Eventually running a Kubernetes cluster spanning both 
            home servers for high availability and learning distributed systems
          </li>
        </ul>
        <p class="article-text">
          These plans involve technical hurdles that need solving, particularly around networking, data 
          synchronization, and ensuring high availability. However, these challenges are exactly what makes 
          homelab projects exciting—they provide hands-on experience with enterprise-level infrastructure.
        </p>
        <div class="image-placeholder">
          <Icon name="heroicons:rocket-launch-20-solid" />
          <span>Future Architecture Diagram</span>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="article-section">
        <h2 class="section-title">Conclusion</h2>
        <p class="article-text">
          This homelab represents a continuous learning journey in system administration, networking, security, 
          and DevOps practices. It's more than just a server—it's a practical testing ground for technologies 
          used in production environments. From secure VPN access to public web hosting without exposed ports, 
          from containerized services to network file sharing, every component teaches valuable lessons about 
          how modern infrastructure works.
        </p>
        <p class="article-text">
          Whether you're interested in building your own homelab or just curious about how personal server 
          infrastructure works, I hope this overview proves insightful. Feel free to check the "Live Statistics" 
          tab to see real-time metrics from the server!
        </p>
      </section>
    </article>
  </Motion>
</template>

<style scoped>
.article-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
}

.homelab-article {
  color: #ffffff;
}

.article-section {
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 700;
  font-size: 1.75rem;
  color: #ffffff;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.5px;
}

.service-subsection {
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 2px solid rgba(255, 255, 255, 0.15);
}

.service-title {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 1.25rem;
  color: #ffffff;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.service-title svg {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.7);
}

.article-text {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 1rem 0;
}

.article-list {
  font-family: 'Nexa', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin: 1rem 0 1rem 1.5rem;
  padding: 0;
}

.article-list li {
  margin-bottom: 0.75rem;
}

.article-list strong {
  color: #ffffff;
  font-weight: 600;
}

.image-placeholder {
  background: rgba(255, 255, 255, 0.03);
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 3rem 2rem;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

.image-placeholder:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.3);
}

.image-placeholder svg {
  width: 48px;
  height: 48px;
  color: rgba(255, 255, 255, 0.4);
}

.image-placeholder span {
  font-family: 'Nexa', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .article-container {
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .service-title {
    font-size: 1.1rem;
  }

  .article-text,
  .article-list {
    font-size: 0.95rem;
  }

  .service-subsection {
    padding-left: 0.75rem;
  }

  .image-placeholder {
    padding: 2rem 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.25rem;
  }

  .service-title {
    font-size: 1rem;
  }

  .article-text,
  .article-list {
    font-size: 0.9rem;
  }
}
</style>
